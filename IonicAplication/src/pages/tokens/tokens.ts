import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

// pages
import { EditTokenPage } from '../edit-token/edit-token';

// providers
import { TokenServiceProvider } from '../../providers/token-service/token-service';

@IonicPage()
@Component({
  selector: 'page-tokens',
  templateUrl: 'tokens.html',
})
export class TokensPage {

  tokens: Observable<any>;

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
  	private modalCtrl: ModalController,
    private toastCtrl: ToastController,
  	private tokenService: TokenServiceProvider) {
    
    this.tokens = this.tokenService.getAll();
  }

  private newTokenPage(token: any){
  	let modal = this.modalCtrl.create(EditTokenPage, {token: token});
  	modal.present();
  }

  newToken(){
  	this.newTokenPage({});
  }

  editToken(token: any){
    this.newTokenPage(token);
  }

  deleteToken(key: string){
    this.tokenService.remove(key)
    .then(()=>{
      this.toastCtrl.create({ message: "Ficha removida com sucesso", duration: 3000}).present();
    }).catch(error => {
      this.toastCtrl.create({ message: "Erro ao remover sua ficha", duration: 3000}).present();
    });
  }

}