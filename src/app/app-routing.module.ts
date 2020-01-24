import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  {
    path:'', redirectTo:'user' , pathMatch:'full'
  },
  {
    path:'user' , component:UserFormComponent
  },
  {
    path:'userList' , component:UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
