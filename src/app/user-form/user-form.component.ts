import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArrayType } from '@angular/compiler';
import { UserService } from '../user.service';
import { datepicker } from 'bootstrap-datepicker'

declare var $: any

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  providers: [UserService]
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  dumiArray = []
  showError = false
  userDataForm = {}

  constructor(private formBuilder: FormBuilder, private router: Router, private UserService: UserService) {
    debugger
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      city: ['', [Validators.required, Validators.maxLength(60)]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      dateOfBirth: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });


  }

  ngOnInit() {
  }

  userData(data) {
    debugger
    this.showError = false

    this.userDataForm = {
      "name": data.name,
      "city": data.city,
      "phone": data.phone,
      "dateOfBirth": new Date(data.dateOfBirth).toLocaleDateString(),
      "email": data.email,
    }

    var dateArray = this.userDataForm['dateOfBirth'].split('/');
    var year = dateArray[2];
    var month = dateArray[1];
    var day = dateArray[0];

    var todayDateYear = new Date().getFullYear();
    var todayDateMonth = new Date().getMonth() + 1;
    var todayDateDay = new Date().getDate();
    var checkYearForValidation = todayDateYear - 18;

    if (year > checkYearForValidation) {
      return this.showError = true
    }
    if (year == checkYearForValidation) {
      if (month == todayDateMonth) {
        if (day > todayDateDay) {
          return this.showError = true
        }
      }
      if (month > todayDateMonth) {

        return this.showError = true

      }
    }

    var jstr = JSON.stringify(data)
    console.log(jstr);
    var jpar = JSON.parse(jstr)
    console.log(jpar);

    this.UserService.createUser(this.userDataForm).subscribe(res => {
      debugger
      if (res['status'] === 200) {
        this.router.navigate(['userList']);
      }
      else {
        return console.log('not created')
      }
    })



  }

}
