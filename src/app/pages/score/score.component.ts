// src/app/pages/score/score.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { Answer } from '../../models/Question';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  quizId: string | null = null;
  quiz: any | null = null;
  attemptId: string | null = null;
  attempt: any | null = null;

  constructor(private route: ActivatedRoute, private quizService: QuizService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.quizId = params['quizId'];
      this.attemptId = params['attemptId'];

      this.loadQuiz();
    });
  }
 mapAttemptSelection(){
  if (this.quiz && this.attempt) {
    this.quiz.questions = this.quiz.questions.map((question: any) => {
    return {
      ...question,
      selectedOption : this.attempt.answers.find((answer:Answer)=> question.id == answer.questionId).selectedOption
    }
    });
    console.log(this.quiz.questions)
  }
 }
  loadQuiz(): void {
    if (this.quizId && this.attemptId) {
      this.quizService.getQuizById(this.quizId).subscribe((quiz) => {
        this.quiz = quiz;
        this.attempt = this.quiz.attempts.find((attempt: any) => attempt.id === this.attemptId);
        this.mapAttemptSelection()
      });
    }
  }
  getScoreText(): string {
    const totalQuestions = this.quiz.questions.length;
    const userScore = this.attempt.score;

    // Customize the text based on your criteria
    if (userScore === totalQuestions) {
      return 'Congratulations! You know '+this.attempt.userFullName+' exceptionally well!';
    } else if (userScore >= totalQuestions * 0.8) {
      return 'Great job! You have a good understanding of '+this.attempt.userFullName+'';
    } else if (userScore >= totalQuestions * 0.5) {
      return 'Not bad! You know some things about '+this.attempt.userFullName;
    } else {
      return 'Keep exploring! There are more things to discover about '+this.attempt.userFullName;
    }
  }
}
