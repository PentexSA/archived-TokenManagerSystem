import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VampirePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vampire',
  templateUrl: 'vampire.html',
})
export class VampirePage {

  lefts: any = true;
  middles: any = true;
  rights: any = true;
  
  talents: any = true;
  expertises: any = true;
  knowledges: any = true;

  vitalitie: any = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.lefts = ['Nome', 'Jogador', 'Crônica'];
  	this.middles = ['Natureza', 'Comportamento', 'Clã'];
  	this.rights = ['Geração', 'Refúgio', 'Conceito'];

  	this.talents = ['Prontidão', 'Esportes', 'Briga',
  	'Esquiva', 'Empatia', 'Expressão', 'Intimidação',
  	'Liderança', 'Manha', 'Lábia'];
  	this.expertises = ['Empatia com animais', 'Ofícios',
  	'Condução', 'Etiqueta', 'Armas de fogo', 'Armas brancas',
  	'Perfomance', 'Segurança', 'Furtividade', 'Sobrevivência'];
  	this.knowledges = ['Acadêmicos', 'Computador', 'Finanças',
  	'Investigação', 'Direito', 'Linguística', 'Medicina',
  	'Ocultismo', 'Política', 'Ciência'];

    this.vitalitie = ['Escoriado', 'Machucado', 'Ferido',
    'Ferido Gravemente', 'Espancado', 'Aleijado', 'Incapacitado'];
  }
}
