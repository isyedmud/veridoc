import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BACKENDURL } from 'src/app/pages/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /**
   * API url from constants
   * @see src/app/pages/constants
   */
  private apiUrl = BACKENDURL;

  constructor(
    private http: HttpClient
  ) { }

  /**
   * 
   * @param req 
   * @returns observable
   */
  signUp(req) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    return this.http.post(this.apiUrl + "/user/register", req, {headers: headers});
  }

  /**
   * 
   * @param credential(email: String, password: String)
   * @returns observable
   */
  login(credential) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    return this.http.post(this.apiUrl + "/user/login", credential, {headers: headers});
  }

  /**
   * Reset Password
   * @param email: String
   * @returns observable
   */
  resetPassword(email) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    return this.http.post(this.apiUrl + "/user/restPassword", {email: email}, {headers: headers});
  }
}
