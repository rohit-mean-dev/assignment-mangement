import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseurl: string = `${environment.baseUrl}auth/`;

  constructor(private http: HttpClient) {}

  // login(body){

  // }

  register(body: any) {
    return this.http.post(`${this.baseurl}register`, body);
  }
}
