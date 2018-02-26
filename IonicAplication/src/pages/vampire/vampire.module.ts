import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VampirePage } from './vampire';

@NgModule({
  declarations: [
    VampirePage,
  ],
  imports: [
    IonicPageModule.forChild(VampirePage),
  ],
})
export class VampirePageModule {}
