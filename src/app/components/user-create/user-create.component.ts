import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import {UserService} from '../../services/user/user.service';

import {User} from '../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  user: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private route: Router) { }

  ngOnInit(): void {
    this.user = this.fb.group({
      username: new FormControl('', [Validators.required]),
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });


  }


  onSubmit() {
    let newUser:User = new User(this.user.value);
    this.userService.createUser(newUser).subscribe(
      response => {
        console.log('registro exitoso');
        this.redirect('');
      }, error => {
        console.log('Registro fallido');
      }
    );


  }


  redirect(routePath: any) {
    this.route.navigate([routePath]);
  }

}
