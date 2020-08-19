import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { UserCreateComponent} from './components/user-create/user-create.component';
import {HomeComponent} from './components/home/home.component';
import { EventCreateComponent } from './components/event-create/event-create.component';

const routes: Routes = [
  { path:'', component:LoginComponent },
  { path:'user-create', component:UserCreateComponent },
  { path:'home', component:HomeComponent },
  { path:'event-create', component:EventCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
