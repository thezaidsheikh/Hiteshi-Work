import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import {UserFormComponent} from './user-form/user-form.component'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  readonly baseUrl = 'http://localhost:1234/user/';

  createUser(data:any){
    debugger
    return this.http.post(`${this.baseUrl}createUser`,data);
  }

  getAllUser(){
    debugger
    return this.http.get(`${this.baseUrl}allUser`);
  }

  getByCity(cityValue){
    debugger
    return this.http.get(`${this.baseUrl}getByCity?city=${cityValue}`);
  }

  getByName(nameValue){
    debugger
    return this.http.get(`${this.baseUrl}getByName?name=${nameValue}`);
  
  }

  getByEmail(emailValue){
    debugger
    return this.http.get(`${this.baseUrl}getByemail?email=${emailValue}`);
  }
  
}
