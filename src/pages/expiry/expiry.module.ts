import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpiryPage } from './expiry';

@NgModule({
  declarations: [
    ExpiryPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpiryPage),
  ],
})
export class ExpiryPageModule {}
