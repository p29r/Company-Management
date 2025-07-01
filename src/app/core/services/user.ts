import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {

  constructor( private http: HttpClient) { }

onLogin(obj:any){
  debugger
  return this.http.post('https://freeapi.miniprojectideas.com/api/ClientStrive/login',obj)
}
}
