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

  /**
   * Get Profile Info
   * @param uid
   * @returns observable
   */
  getUser(uid) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    return this.http.post(this.apiUrl + "/user/getUser", {uid: uid}, {headers: headers});
  }

  /**
   * Update User Profile
   * @param user: Object
   * @returns observable
   */
  updateUser(user) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    return this.http.post(this.apiUrl + "/user/updateUser", {user: user}, {headers: headers});
  }

  /**
   * Get users by their role
   * @param role user role
   * 0: normal user
   * 1: expert
   * 2: admin
   */
  getUsers(role="") {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    return this.http.post(this.apiUrl + "/user/getUsers", {role: role}, {headers: headers});
  }

  acceptUser(uid) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    return this.http.post(this.apiUrl + "/user/acceptUser", {uid: uid}, {headers: headers});
  }

  deleteAccount(uid, role) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    return this.http.post(this.apiUrl + "/user/deleteUser", {uid: uid, role: role}, {headers: headers});
  }

  /**
   * Post Request
   * @param post: Object
   * @returns observable
   */
  postRequest(post) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    return this.http.post(this.apiUrl + "/post/postRequest", {post: post}, {headers: headers});
  }

  /**
   * Get My Requests (User side)
   * @param uid userid
   * @returns observable
   */
  getRequest(uid) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    return this.http.post(this.apiUrl + "/post/getRequest", {uid: uid}, {headers: headers});
  }

  /**
   * Get All requests by expertid
   * @param expertId expert id
   */
  getAllRequests(expertId = "") {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    return this.http.post(this.apiUrl + "/post/getAllRequests", {expertId: expertId}, {headers: headers});
  }

  requestSetExpert(reqdata) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    return this.http.post(this.apiUrl + "/post/setExpert", reqdata, {headers: headers});
  }

  uploadFiles(formData) {
    let headers = new HttpHeaders();
    headers = headers.set("enctype", "multipart/form-data");
    return this.http.post(this.apiUrl + "/post/uploadAttachment", formData, {headers: headers}).toPromise();
  }

  /**
   * Download File from server
   * @param filename filename to download
   */
  downloadFile(filename) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    return this.http.post(this.apiUrl + "/post/downloadAttachment", {filename: filename}, {responseType: 'blob', headers: new HttpHeaders().append('Content-Type', 'application/json')});
  }

  processPayment(requestId) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    return this.http.post(this.apiUrl + "/post/processPayment", {requestId: requestId}, {headers: headers});
  }

  /**
   * Close Request
   * @param id request id
   * @returns observable
   */
  closeRequest(id)   {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    return this.http.post(this.apiUrl + "/post/closeRequest", {id: id}, {headers: headers});
  }
}
