import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from '../user.service'
import { Form, NgForm, FormBuilder, FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {

  cityFilter = ''
  data: any;
  cities = [];
  ddd = '';
  nameFilter = '';
  emailFilter = '';

  forSearch: FormGroup;


  constructor(private router: Router, private UserService: UserService, private FormBuilder: FormBuilder) {
    this.forSearch = this.FormBuilder.group({
      nameFilter: new FormControl(),
      emailFilter: new FormControl,
      cityFilter: new FormControl
    });
  }

  ngOnInit() {
    debugger
    this.UserService.getAllUser().subscribe(res => {
      if (res['status'] === 200) {
        this.data = res['data'];
        this.cities=this.data.map(data=>data.city)
         this.cities = Array.from(new Set(this.cities))
       
      }
      else {
        return console.log('not created')
      }
    })
  }


  Search(valueForFilter) {
    debugger


    if (valueForFilter.nameFilter == null) {
      valueForFilter.nameFilter = '';
    }
    if (valueForFilter.emailFilter == null) {
      valueForFilter.emailFilter = '';
    }
    this.UserService.toFilter(valueForFilter).subscribe(res => {
      if (res['status'] === 200) {
        this.data = res['data'];
      }
      else {
        return console.log('not created')
      }
    })

  }

}
