import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Constant } from '../constants/constant';

@Injectable({
  providedIn: 'root'
})
export class Client {

  constructor(private http: HttpClient) { }

  getAllClientList() {
    //debugger
    return this.http.get(environment.API_URL + Constant.API_METHODS.CLENT.GET_ALL_CLIENTS)
  }
}