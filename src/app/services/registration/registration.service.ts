/* @author Avinash Gazula <agazula@dal.ca> */

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  serverUrl: string = environment.serverUrl;

  constructor(private httpClient: HttpClient) { }

  register(body: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.post(this.serverUrl + '/users/register', body, httpOptions);
  }

  registerDoctor(body: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.post(this.serverUrl + '/users/register-doctor', body, httpOptions);
  }

  getDoctorTypes(): Observable<any> {
    return this.httpClient.get(this.serverUrl + '/search/types')
  }
}
