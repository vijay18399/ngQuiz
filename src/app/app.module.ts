import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FirebaseAppModule } from '@angular/fire/app';
import { environment } from '../environments/environment.development';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CreateQuizComponent } from './pages/create-quiz/create-quiz.component';
import { AttemptQuizComponent } from './pages/attempt-quiz/attempt-quiz.component';
import { QuestionComponent } from './components/question.component';
import { InputModelComponent } from './components/input-model.component';
import { ScoreComponent } from './pages/score/score.component';
import { AttemptsComponent } from './pages/attempts/attempts.component';

@NgModule({
  declarations: [AppComponent,HomeComponent,ProfileComponent,CreateQuizComponent,AttemptQuizComponent,ScoreComponent,AttemptsComponent,QuestionComponent,InputModelComponent],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FirebaseAppModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireModule,
    // StoreModule.forRoot({  }), // Add your reducers here
    // EffectsModule.forRoot([]), // Add your effects here
    // StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    AuthService, AuthGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
