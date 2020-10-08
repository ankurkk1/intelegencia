import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  userData: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
    console.log(this.userData);
  }

  SignIn(email: string, password: string) {
    console.log(this.userData);
    console.log(this.angularFireAuth);
    this.angularFireAuth      
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed in!');
      })
      .catch(err => {
        console.log('Something is wrong:',err.message);
        alert('Something is wrong');
      });
  }

  
  SignOut() {
    this.angularFireAuth
      .signOut();
  }  

}