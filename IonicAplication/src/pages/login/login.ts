import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// firebase
import { AngularFireAuth } from 'angularfire2/auth';

// pages
import { PlayerPage } from '../player/player';
import { RegisterPage } from '../register/register';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('email') email;
  @ViewChild('password') password;

  constructor(private fire: AngularFireAuth,
  	private alertCtrl: AlertController,
  	public navCtrl: NavController,
  	public navParams: NavParams) {
  }

  alert(message: string){
  	this.alertCtrl.create({
  		title: "Info",
  		subTitle: message,
  		buttons: ['OK']
  	}).present();
  }

  login(){
  	this.fire.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
  	.then(data=>{
  		this.alert("Succes! You're logged in!");
  		console.log("Got data: ", data);
  		this.navCtrl.setRoot(PlayerPage);
  	})
  	.catch(error=>{
  		this.alert(error.message);
  		console.log("Got this error: ", error);
  	});
  }

  goToRegister(){
    this.navCtrl.push(RegisterPage);
  }

}
