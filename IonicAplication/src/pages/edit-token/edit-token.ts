import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// provider
import { TokenServiceProvider } from '../../providers/token-service/token-service';

@IonicPage()
@Component({
  selector: 'page-edit-token',
  templateUrl: 'edit-token.html',
})
export class EditTokenPage {

	token: any;
	title: string;
	tokenForm: FormGroup;

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
  	private toastCtrl: ToastController,
  	private viewCtrl: ViewController,
  	private formBuilder: FormBuilder,
  	private tokenService: TokenServiceProvider) {
  	this.token = this.navParams.data.token || {};
  	this.setupPageTitle();
  	this.createForm();
  }

  private setupPageTitle(){
  	this.title = this.navParams.data.token ? "Nova ficha" : "Alterando ficha";
  }

  private createForm(){
  	this.tokenForm = this.formBuilder.group({
  		key: [this.token.key],
  		name: [this.token.name],
  		game: [this.token.game]
  	})
  }

  save(){
  	if(this.tokenForm.valid){
  	  	this.tokenService.save(this.tokenForm.value)
  	  	.then(() =>{
  	  		this.toastCtrl.create({ message: "Sua ficha foi salva com sucesso", duration: 3000}).present();
  	  		this.viewCtrl.dismiss();
  	  	}).catch(error => {
  	  		this.toastCtrl.create({ message: "Erro ao salvar sua ficha", duration: 3000}).present();
  	  		console.log(error);
  	  	});
  	}
  }

}