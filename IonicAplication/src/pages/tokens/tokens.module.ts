import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TokensPage } from './tokens';

@NgModule({
  declarations: [
    TokensPage,
  ],
  imports: [
    IonicPageModule.forChild(TokensPage),
  ],
})
export class TokensPageModule {}
