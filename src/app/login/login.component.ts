import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authForm: FormGroup;

  constructor(private route: Router, private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.authForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])

    });
  }

  onSubmit() {

    this.userService.authUser(this.username, this.password).subscribe((response:any) => {
        console.log('login ok', JSON.stringify(response));
        this.redirect("home");
      }, error => {
        console.log('login error', error);
      }

    );

  }


  get username() {
    return this.authForm.get("username").value;
  }

  get password() {
    return this.authForm.get("password").value;
  }


  redirect(routePath: any) {
    this.route.navigate([routePath]);
  }

}
