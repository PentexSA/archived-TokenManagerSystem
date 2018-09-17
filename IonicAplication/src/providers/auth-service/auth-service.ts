// this provider is responsible for the auth service provided by firebase
import { Injectable } from '@angular/core';

// firebase auth module
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthServiceProvider {

  constructor(private fireAuth: AngularFireAuth) {}


  // commom login with an email and password
  login(email: string, password: string){
  	return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  // logout will be called everytime the app is closed
  logout(){
  	return this.fireAuth.auth.signOut();
  }

  // to register a commom login
  register(email: string, password: string){
  	return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

}