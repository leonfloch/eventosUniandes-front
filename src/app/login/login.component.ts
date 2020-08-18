import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authForm: FormGroup;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }


  redirect(routePath: any) {
    this.route.navigate([routePath]);
  }

}
