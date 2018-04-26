import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// firebase
import { AngularFireAuth } from 'angularfire2/auth';

// pages
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

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

  register(){
  	this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
  	.then(data=>{
  		this.alert("Succes! You're registered!");
  		console.log("Got data: ", data);
  		this.navCtrl.push(LoginPage);
  	}).catch(error=>{
  		this.alert(error.message);
  		console.log("Got this error: ", error);
  	});
  }
}
