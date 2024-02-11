// src/app/create-quiz/create-quiz.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { questions } from '../../questions';
import { Question } from '../../models/Question';
import { AuthService } from '../../services/auth.service';
import { User, UserInfo } from '@angular/fire/auth';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss'],
})
export class CreateQuizComponent implements OnInit {
  showModel:boolean=false;
  questions: Question[] = [];
  currentQuestionIndex = 0;
  currentUser!: UserInfo | null;
  showToast: boolean = false;
  toastMessage:string = '';
  quizId:string ='';
  constructor(private quizService: QuizService, public authService: AuthService) {}

  ngOnInit(): void {
    this.loadQuestions();
    this.authService.getCurrentUser().subscribe((user)=>{
      this.currentUser = user;
    })
  }

  loadQuestions(): void {
      this.questions = questions;
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }else{
      this.showToastMessage("You reached end");
    }
  }

  prevQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }
  onUpdateQuestion(question:Question){
    this.questions[this.currentQuestionIndex] = question;
  }
  createQuizz(): void {
    const answeredQuestions = this.questions.filter(
      (question) => question.answerOption !== undefined
    );

    if (answeredQuestions.length >= 5) {
      const quizData = {
        questions: answeredQuestions,
        user_name: this.currentUser?.displayName,
        user_id : this.currentUser?.uid,
        createdAt : new Date(),
        lastUpdated: new Date()
      };

      this.quizService
        .addQuizToFirestore(quizData)
        .then((docRef: any) => {
          this.quizId = docRef.id;
          this.showModel = true;
          console.log('Quiz added with ID: ', docRef.id);
          this.showToastMessage('Quiz created successfully!');
        })
        .catch((error: any) => {
          console.error('Error adding quiz: ', error);
          this.showToastMessage('Error creating quiz. Please try again.');
        });

      console.log(quizData);
    } else {
      this.showToastMessage("Select at least 5 questions to create a quiz.");
    }
  }
  private showToastMessage(message: string): void {
    this.toastMessage =message;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }
  atLeastAnswered(number: number): boolean {
    const answeredQuestionsCount = this.questions.filter((question: any) => question.answerOption !== undefined).length;
    return answeredQuestionsCount >= number;
  }
}


