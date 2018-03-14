import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class songProvider {

  constructor(public http: HttpClient) {
    console.log('Hello Provider Provider');
  }


}
