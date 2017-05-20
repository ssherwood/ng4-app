import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) { }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);
        firebase.auth().currentUser.getIdToken()
          .then((token: string) => this.token = token);
        this.router.navigate(['/']);
      })
      .catch(error => console.log(error));
  }

  logoutUser() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    return this.token != null
  }
}
