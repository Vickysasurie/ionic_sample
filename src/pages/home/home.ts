import { Component,ViewChild } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import {LoginPageModule} from "../login/login.module";
import {RegisterPage} from "../register/register";
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(public navCtrl: NavController,public alertCtrl:AlertController) {

  }
  login()
  {
  	this.navCtrl.push(LoginPage);
  	}
  register()
  {
    this.navCtrl.push(RegisterPage);
  }

}
