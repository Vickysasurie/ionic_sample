import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase} from "angularfire2/database";

/**
 * Generated class for the TrialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trial',
  templateUrl: 'trial.html',
})

export class TrialPage {
date:any
  constructor( public db:AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
    this.date= navParams.get('date');



    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TrialPage');

}

}
