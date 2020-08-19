import { Injectable } from '@angular/core';
import { Login } from 'src/app/model/Login';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor() { }


  /**
   * Retorna el token de session
   */
  getUserSession():Login {
    var user = localStorage.getItem('user');
    return JSON.parse(user)
  }
}
