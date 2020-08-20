import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import {environment} from '../../../environments/environment';
import {SecurityService} from '../security/security.service';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseUrl = environment.baseUrl;

  constructor(protected http: HttpClient, private securityService:SecurityService) { }



  /**
   *
   * @param url
   * @param data
   */
  post<T>(url, data): Observable<T> {
    return this.http.post<T>(this.baseUrl + url, data, this.getHttpOptionsAuth()).pipe(
      catchError(this.handleError)
    );
  }

  get<T>(url): Observable<T> {
    return this.http.get<T>(this.baseUrl + url, this.getHttpOptionsAuth()).pipe(
      catchError(this.handleError)
    );
  }

  delete<T>(url): Observable<T> {
    console.log('URL delete: ', url)
    return this.http.delete<T>(this.baseUrl + url, this.getHttpOptionsAuth()).pipe(
      catchError(this.handleError)
    );
  }

  put<T>(url, data): Observable<T> {
    console.log('URL put: ', url)
    return this.http.put<T>(this.baseUrl + url, data, this.getHttpOptionsAuth()).pipe(
      catchError(this.handleError)
    );
  }

  /**
   *
   */
  private getTokenSession() {
    return (this.securityService.getUserSession()) ? this.securityService.getUserSession().token : '';
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  /**
   *
   */
  private getHttpOptionsAuth() {

    let httpOptionsAuth = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.getTokenSession(),
      })
    };
    return httpOptionsAuth;

  }


}
