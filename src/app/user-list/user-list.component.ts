import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {UserService} from '../user.service'
import {Form , NgForm} from '@angular/forms'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers:[UserService]
})
export class UserListComponent implements OnInit {

  emailValue:any
  data : any;
  cities =[];
  ddd ='';
  nameClear =''
  emailClear =''
  constructor(private router:Router , private UserService:UserService) { 
  }

  ngOnInit() {
debugger
this.UserService.getAllUser().subscribe(res=>{
  if(res['status']===200){
    this.data = res['data'];
    this.data.map(data =>{
      this.cities.push({
        "city":data.city
      })
    });
  }
  else{
    return console.log('not created')
  }
})
  }

  cityFilter(cityValue){
    debugger
    this.nameClear =''
  this.emailClear =''
    this.UserService.getByCity(cityValue).subscribe(res=>{
      if(res['status']===200){
        this.data = res['data'];
      }
      else{
        return console.log('not created')
      }
    })
  }

  nameFilter(nameValue){
    debugger
    this.ddd=''
    this.emailClear =''
    this.UserService.getByName(nameValue).subscribe(res=>{
      if(res['status']===200){
        this.data = res['data'];
      }
      else{
        return console.log('not created')
      }
    })
  }

  emailFilter(emailValue){
    debugger
    this.nameClear =''
    this.ddd=''
    this.UserService.getByEmail(emailValue).subscribe(res=>{
      if(res['status']===200){
        this.data = res['data'];
      }
      else{
        return console.log('not created')
      }
    })

  }
  cityKey(e){
debugger
this.emailValue['value']=''
  }

}
