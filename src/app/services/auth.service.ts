// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {  GoogleAuthProvider } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  googleLogin() {
    return this.afAuth.signInWithPopup(new GoogleAuthProvider());
  }

  logout() {
    return this.afAuth.signOut();
  }

  getCurrentUser() {
    return this.afAuth.authState;
  }
  isLogged() {
    return this.afAuth.authState !== null;
  }
}
