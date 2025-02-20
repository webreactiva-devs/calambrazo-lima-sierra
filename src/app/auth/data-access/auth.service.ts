import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';

export interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth = inject(Auth)

  signUp(user: User) {
    return createUserWithEmailAndPassword(
      this._auth,
      user.email,
      user.password
    ).catch((error) => {
      switch (error.code) {
        case 'auth/email-already-in-use':
          throw new Error('Este correo ya está registrado.');
        case 'auth/invalid-email':
          throw new Error('El correo electrónico no es válido.');
        case 'auth/weak-password':
          throw new Error('La contraseña debe tener al menos 6 caracteres.');
        default:
          throw new Error('Error al registrar usuario. Inténtalo de nuevo.');
      }
    });
  }

  signIn(user: User) {
    return signInWithEmailAndPassword(
      this._auth,
      user.email,
      user.password
    );
  }

  signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this._auth, provider);
  }
}
