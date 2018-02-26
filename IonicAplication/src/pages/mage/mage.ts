import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mage',
  templateUrl: 'mage.html',
})
export class MagePage {

  @ViewChild('first') first;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  plusOne(){
  	this.first.checked("true");
  }
}