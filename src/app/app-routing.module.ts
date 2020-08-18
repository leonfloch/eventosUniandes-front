import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { UserCreateComponent} from './components/user-create/user-create.component';

const routes: Routes = [
  { path:'', component:LoginComponent },
  { path:'user-create', component:UserCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
