import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrl: './attempts.component.scss'
})
export class AttemptsComponent {
  quizId: string | null = null;
  quiz: any | null = null;
  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {}

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



}
