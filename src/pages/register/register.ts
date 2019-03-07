import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('uname') username ;
  @ViewChild('pass') password ;

  constructor(private fire:AngularFireAuth,public navCtrl: NavController, public alertCtrl:AlertController,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
    this.fire.auth.createUserWithEmailAndPassword (`${this.username.value}@domai.sss`, this.password.value)
      .then(data =>{
        console.log('got data',data);

      })
    .catch(error => {
      console.log('got an error', error);

    });
    console.log('would register user with',this.username.value,this.password.value);
   if (this.username.value != '' && this.password.value!='')
    {
      let alert = this.alertCtrl.create({
        title: 'account created! ',
        subTitle: 'please login',
        buttons: ['OK']
      });
      alert.present();
    }
    else if (this.username.value != '') {
      let alert = this.alertCtrl.create({
        title: 'please enter password',
        subTitle: '',
        buttons: ['OK']
      });
      alert.present();
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'please enter username!',
        buttons: ['OK']
      });
      alert.present();
    }
  }



}
