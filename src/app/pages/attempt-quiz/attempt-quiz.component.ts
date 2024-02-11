import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { Answer, Attempt, Question } from '../../models/Question';
import * as uuid from 'uuid';
@Component({
  selector: 'app-attempt-quiz',
  templateUrl: './attempt-quiz.component.html',
  styleUrls: ['./attempt-quiz.component.scss'],
})
export class AttemptQuizComponent implements OnInit {
  quizId: string | null = null;
  quiz: any | null = null;
  currentQuestionIndex = 0;
  answers: Answer[] = [];
  userFullName: string = '';
  constructor(private route: ActivatedRoute,private router:Router, private quizService: QuizService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.quizId = params['quizId'];
      this.loadQuiz();
    });
  }

  loadQuiz(): void {
    if (this.quizId) {
      this.quizService.getQuizById(this.quizId).subscribe((quiz) => {
        this.quiz = quiz;
      });
    }
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.quiz.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      alert('You reached the end');
    }
  }

  prevQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  getAnswers(): Answer[] {
    return this.quiz.questions.map((question: Question) => { return { questionId: question.id, selectedOption: question.selectedOption } })
  }
  correctAnswersCount(): number {
    let correctAnswers = 0;
    this.answers.forEach((answer) => {
      const question = this.quiz.questions.find(
        (q: any) => q.id === answer.questionId
      );
      if (question && answer.selectedOption === question.answerOption) {
        correctAnswers++;
      }
    });
    return correctAnswers;
  }
  allQuestionsAnswered(): boolean {
    return this.quiz.questions.every(
      (question: any) => question.selectedOption !== undefined
    );
  }
  onUpdateQuestion(question: Question) {
    this.quiz.questions[this.currentQuestionIndex] = question;
  }
  submitQuiz(): void {
    this.answers = this.getAnswers()
    if (this.userFullName && this.answers.length > 0) {
      const attempt: Attempt = {
        userFullName: this.userFullName,
        answers: this.answers,
        score: this.correctAnswersCount(),
        id:uuid.v4(),
        createdAt : new Date()
      };
      console.log(attempt)
      if(this.quizId)
           this.quizService.addAttemptToQuiz(attempt, this.quizId).then((success)=>{
                console.log('Quiz submitted successfully!', attempt);
                this.router.navigate(['score',this.quizId,attempt.id])
            }).catch((err)=>{
                console.log('submitted Quiz  Failed', attempt);
            })

    }
    else {
      alert('Please provide your full name and answer all questions before submitting.');
    }
  }
  onEmitName(name: string) {
    console.log(name)
    this.userFullName = name;
  }
}
