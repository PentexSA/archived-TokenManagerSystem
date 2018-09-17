import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DesksPage } from './desks';

@NgModule({
  declarations: [
    DesksPage,
  ],
  imports: [
    IonicPageModule.forChild(DesksPage),
  ],
})
export class DesksPageModule {}
