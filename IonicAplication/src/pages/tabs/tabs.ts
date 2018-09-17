import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// pages
import { FriendsPage } from '../friends/friends';
import { DesksPage } from '../desks/desks';
import { TokensPage } from '../tokens/tokens';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

	tab1: any = TokensPage;
	tab2: any = DesksPage;
	tab3: any = FriendsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}