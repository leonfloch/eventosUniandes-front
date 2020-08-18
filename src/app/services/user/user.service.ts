import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

import {Createuser} from '../../../assets/json/Createuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  /**
   * Servicio encargado de crear un usuario nuevo
   */
  createUser(): Observable<any> {

    console.log("Crear usuario service");

    return of(Createuser);
  }


}
