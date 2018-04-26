import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// pages
import { MagePage } from '../mage/mage';

@IonicPage()
@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  mage(){
  	this.navCtrl.push(MagePage);
  }

}
