import {Component, ɵisPromise} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dataprovider} from "../../providers/dataprovider";
import {TrialPage} from "../trial/trial";
import {ExpiryPage} from "../expiry/expiry";
import {ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS} from "@angular/platform-browser";


/**
 * Generated class for the SamplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sample',
  templateUrl: 'sample.html',
})
export class SamplePage {
sam:boolean=true


 /* i: any;

  sno:any

  responseData: any
  listData: any
  user={"count":"0"}
  obj = {"id":"" ,"ans":""};*/
 displayDate:any
   responseData: any;
  listData: any
public  edate:boolean;
data1={"date":""};
  cdate:any

  public days: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: Dataprovider) {

  }

  finish()
  {

  }


    mcqAnswer(sno,ans)
    {

    }

    ionViewDidLoad() {

     /* this.data.getQuestion(this.user, "getQuestion").then((result) => {
        this.responseData = result;
        console.log(this.responseData);
        if (this.responseData) {
          this.listData = this.responseData.feedData
          this.sno = this.listData.sno;
          console.log(this.sno);

        } else {
          console.log()
        }
      }, (err) => {

      }).catch((err) => {
        console.log('unHandledRejection', err.message);
      });*/
      this.data1["date"]= new Date().toLocaleDateString('zh-Hans-CN');
      console.log(this.data1);
      this.cdate= new Date().toLocaleDateString('zh-Hans-CN');
      console.log(this.cdate);
      //console.log(new Date());


      this.data.storeDate(this.data1, "storeDate").then((result) => {
        this.responseData = result;
        console.log(this.responseData);
        if (this.responseData) {
          this.edate = this.responseData.diff;

          console.log(this.edate);
         // console.log(this.edate==true);
          if(this.edate)
          {
            this.navCtrl.push(TrialPage,{
              date:this.edate
            });
          }
          else{

            this.navCtrl.setRoot(ExpiryPage);
          }
        } else {
          console.log()
        }
      }, (err) => {

      }).catch((err) => {
        console.log('unHandledRejection', err.message);
      });
      console.log(this.edate==true);

    }


}

