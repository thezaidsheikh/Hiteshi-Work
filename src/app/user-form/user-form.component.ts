import { Component, OnInit } from '@angular/core';
import { FormBuilder  , FormGroup , Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { ArrayType } from '@angular/compiler';
import {UserService} from '../user.service'
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  providers:[UserService]
})
export class UserFormComponent implements OnInit {

userForm:FormGroup;
dumiArray =[]

userDataForm = {}

  constructor( private formBuilder:FormBuilder , private router:Router , private UserService:UserService) {
    debugger
    this.userForm = this.formBuilder.group({
      name:['',Validators.required],
      city:['',[Validators.required , Validators.maxLength(60)]],
      phone:['',[Validators.required,Validators.maxLength(10)]],
      dateOfBirth:['',Validators.required],
      email:['',[Validators.required,Validators.email]]
    });

    
   }

  ngOnInit() {
  }

  userData(data){
    debugger
    this.userDataForm ={
      "name":data.name,
      "city":data.city,
      "phone":data.phone,
      "dateOfBirth":data.dateOfBirth,
      "email":data.email,
    }
    var jstr = JSON.stringify(data)
    console.log(jstr);
    var jpar = JSON.parse(jstr)
    console.log(jpar);
    this.UserService.createUser(this.userDataForm).subscribe(res=>{
      debugger
      if(res['status']===200){
        this.router.navigate(['userList']);
      }
      else{
        return console.log('not created')
      }
    })
    // this.dumiArray.push(data)
    // var array = this.dumiArray;
    // console.log(this.dumiArray)
    // 
  }

}
