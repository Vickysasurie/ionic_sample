import {Component, ViewChild} from '@angular/core';
import {  NavController,AlertController } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
import {LoggedinPage} from "../loggedin/loggedin";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('uname') username ;
  @ViewChild('pass') password ;


constructor(private fire:AngularFireAuth,public navCtrl: NavController,public alertCtrl:AlertController){
  }

alert(message:string)
{
  const alert = this.alertCtrl.create({
    title: 'hey somba!',
    subTitle: 'gethu da!',
    buttons: ['OK']
  });
  alert.present();
}

login()
{
  this.fire.auth.signInWithEmailAndPassword(this.username.value+'@domai.sss', this.password.value)
    .then(data =>{
      console.log('got data',this.fire.auth.currentUser);
      this.alert('u r logged in');
      this.navCtrl.push(LoggedinPage);
    })
    .catch(error => {
      console.log('got an error', error);
      this.alert('username and password doesnot match');
    });
  console.log('would register user with',this.username.value,this.password.value);

}
}
