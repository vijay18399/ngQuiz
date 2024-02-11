// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { CreateQuizComponent } from './pages/create-quiz/create-quiz.component';
import { AttemptQuizComponent } from './pages/attempt-quiz/attempt-quiz.component';
import { AttemptsComponent } from './pages/attempts/attempts.component';
import { ScoreComponent } from './pages/score/score.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'create', component: CreateQuizComponent, canActivate: [AuthGuard] },
  { path: 'attempt/:quizId', component: AttemptQuizComponent },
  { path: 'attempts/:quizId', component: AttemptsComponent },
  { path: 'score/:quizId/:attemptId', component: ScoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
