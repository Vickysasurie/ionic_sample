import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';


import 'rxjs/add/operator/map';





let apiURL="http://192.168.1.23/api/";



/*

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Dataprovider {

    constructor(public http: HttpClient) {
        console.log('Hello Dataprovider Provider');

    }

    loginp(crentials, type) {
        return new Promise((resolve, reject) => {
            let headers = new HttpHeaders();
            this.http.post(apiURL + type, JSON.stringify(crentials), {headers: headers}).subscribe(data => {
                    resolve(data);
                    console.log(data);
                },
                (err) => {
                    console.log("Error Da :" + err);
                    reject(err);

                });
        });
    }

    signup(crentials, type) {
        return new Promise((resolve, reject) => {
            let headers = new HttpHeaders();
            this.http.post(apiURL + type, JSON.stringify(crentials), {headers: headers}).subscribe(data => {
                    resolve(data);
                    console.log(data);
                },
                (err) => {
                    console.log("Veera OOOHH OOH");
                    reject(err);
                });
        });

    }

    getQuestion(crentials, type) {
        return new Promise((resolve, reject) => {
            let headers = new HttpHeaders();
            this.http.post(apiURL + type, JSON.stringify(crentials), {headers: headers}).subscribe(data => {
                    resolve(data);
                    console.log(data);
                },
                (err) => {
                    console.log("Manoj OOH OOH");
                    reject(err);
                });
        });

    }
    storeDate(crentials,type)
    {
      return new Promise((resolve,reject)=>{
       let headers = new HttpHeaders();
         this.http.post(apiURL + type, JSON.stringify(crentials), {headers: headers}).subscribe(data => {
      resolve(data);
      console.log(data);
    },
    (err) => {
      console.log("connection error");
      reject(err);
    });
});
    }


}
