import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

// pages

// providers
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	@ViewChild('email') email;
	@ViewChild('password') password;

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
  	private toasCtrl: ToastController,
  	private authService : AuthServiceProvider) {
  }

  register(){
  	this.authService.register(this.email.value, this.password.value)
    .then(() => {
      this.toasCtrl.create({message: "User created succesfully", duration: 3000});
      this.navCtrl.pop();
    }).catch(error => {
      console.log(error);
    });
  }

}