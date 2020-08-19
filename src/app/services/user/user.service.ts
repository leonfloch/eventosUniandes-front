import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Createuser } from '../../mocks/createUser';
import { Login } from '../../mocks/login';

import {User} from '../../model/user';
import { RequestService } from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private requestService: RequestService) { }

  /**
   * Servicio encargado de crear un usuario nuevo
   */
  createUser(user:User): Observable<any> {
    console.log("Crear usuario service");
    return this.requestService.post('/create-user/', user);
  }

  /**
   *
   */
  authUser(username, password): Observable<any> {

    const body = {
      username,
      password,
    };

    return this.requestService.post('/api-auth/', body);
  }





}
