import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SongProvider {

  constructor(public http: HttpClient) {

  }
  getSongs(){
    return this.http.get("https://ionic-songhop.herokuapp.com/recommendations")
    // return this.http.get("http://localhost:8080/v1/songs")
  }

}



