import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Createuser } from '../../mocks/createUser';
import { Login } from '../../mocks/login';

import { RequestService } from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private requestService: RequestService) { }

  /**
   * Servicio encargado de crear un usuario nuevo
   */
  createUser(): Observable<any> {

    console.log("Crear usuario service");

    return of(Createuser);
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
