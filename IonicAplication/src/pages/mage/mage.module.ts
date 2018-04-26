import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MagePage } from './mage';

@NgModule({
  declarations: [
    MagePage,
  ],
  imports: [
    IonicPageModule.forChild(MagePage),
  ],
})
export class MagePageModule {}
