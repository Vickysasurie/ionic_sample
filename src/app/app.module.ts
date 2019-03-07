import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Dataprovider} from "../providers/dataprovider";
import { HttpClientModule} from "@angular/common/http";





import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import   {LoginPage  } from '../pages/login/login'
import {RegisterPage} from "../pages/register/register";
import { TrialPage } from "../pages/trial/trial"
import { ExpiryPage} from "../pages/expiry/expiry";
import {ImagePage }from "../pages/image/image";

import { AngularFireModule }from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import{ AngularFireDatabaseModule} from "angularfire2/database";
import { LoggedinPage} from "../pages/loggedin/loggedin";
import { SamplePage} from "../pages/sample/sample";


  var config = {
    apiKey: "AIzaSyCY_JqKxMBid4VBa2tX7v2_GEPK1wwM6EU",
    authDomain: "trial-da78e.firebaseapp.com",
    databaseURL: "https://trial-da78e.firebaseio.com",
    projectId: "trial-da78e",
    storageBucket: "trial-da78e.appspot.com",
    messagingSenderId: "487146760818"

};

  @NgModule({
  declarations: [
    MyApp,
    HomePage,
   LoginPage,
    RegisterPage,

    LoggedinPage,
    SamplePage,TrialPage,ExpiryPage,ImagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,HttpClientModule

],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ExpiryPage,

    LoggedinPage,SamplePage,TrialPage,ImagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, Dataprovider,HttpClientModule
  ]
})
export class AppModule {}
