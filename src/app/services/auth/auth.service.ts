import { inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { signInWithEmailAndPassword, signOut } from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }
  private auth: Auth = inject(Auth);
  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(userCredential => {
        return userCredential;
      })
      .catch(error => {
        console.error('Error de autenticación:', error.code);
        throw error;
      });
  }
  logout() {
    console.log('Se ha cerrado la sesión')
    return signOut(this.auth);
  }

  getCurrentUser() {
    return this.auth.currentUser;
  }
}
