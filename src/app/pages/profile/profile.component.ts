// src/app/profile/profile.component.ts
import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { AuthService } from '../../services/auth.service';
import { UserInfo } from '@angular/fire/auth';
import { Quiz } from '../../models/Question';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  currentUser!: UserInfo | null;
  userQuizzes: Quiz[] = [];

  constructor(private quizService: QuizService, public authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
      this.loadUserQuizzes();
    });
  }

  loadUserQuizzes(): void {
    if (this.currentUser) {
      this.quizService.getQuizzesByUser(this.currentUser.uid!).subscribe((quizzes) => {
        this.userQuizzes = quizzes.map((quiz) => ({
          ...quiz,
          showDetails: false,
        }));
      });
    }
  }

  // Function to toggle details of a quiz (show/hide attempts)
  toggleDetails(quiz: Quiz): void {
    quiz.showDetails = !quiz.showDetails;
  }

  // Function to navigate to attempts page for a specific quiz
  logout(): void {
      this.authService.logout();
  }
}
