import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

// pages
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';

// provider
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	@ViewChild('email') email;
	@ViewChild('password') password;

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
  	private toasCtrl: ToastController,
  	private authService: AuthServiceProvider) {
  }

  login(){
  	this.authService.login(this.email.value, this.password.value)
  	.then(() => {
  		this.toasCtrl.create({message: "User logged in succesfully!", duration: 3000});
  		this.navCtrl.push(TabsPage);
  	}).catch(error => {
  		console.log(error);
  	});
  }

  register(){
  	this.navCtrl.push(RegisterPage);
  }

}