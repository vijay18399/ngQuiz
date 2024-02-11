// src/app/services/quiz.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Attempt, Quiz } from '../models/Question';
import {arrayUnion} from "firebase/firestore";

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(public firestore: AngularFirestore) {}

  addQuizToFirestore(quizData: any) {
    return this.firestore.collection('quizzes').add(quizData);
  }

  getQuizById(quizId: string): Observable<any> {
    return this.firestore.collection('quizzes').doc(quizId).valueChanges();
  }

  addAttemptToQuiz(attempt: Attempt, quizId: string) {
    return this.firestore.collection('quizzes').doc(quizId).update({
      attempts:  arrayUnion(attempt)
    });
  }

  getQuizzesByUser(userId: string): Observable<any[]> {
    return this.firestore
      .collection('quizzes', (ref: any) => ref.where('user_id', '==', userId))
      .snapshotChanges()
      .pipe(
        map((actions: any) =>
          actions.map((a: any) => ({ id: a.payload.doc.id, ...a.payload.doc.data() }))
        )
      );
  }

}
