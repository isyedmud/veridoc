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
  getUsers(role=0) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    return this.http.post(this.apiUrl + "/user/getUsers", {role: role}, {headers: headers});
  }

  acceptUser(uid) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    return this.http.post(this.apiUrl + "/user/acceptUser", {uid: uid}, {headers: headers});
  }

  getHighlightedExperts() {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    return this.http.post(this.apiUrl + "/expert/getHighlighted", {headers: headers});
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

  /**
   * Assign request to expert
   * @param reqdata request data
   */
  requestSetExpert(reqdata) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    return this.http.post(this.apiUrl + "/post/setExpert", reqdata, {headers: headers});
  }

  getRequestById(reqId) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    return this.http.post(this.apiUrl + "/post/getRequestById", {reqId: reqId}, {headers: headers});
  }

  /**
   * Get Request by status
   * @param status request status
   */
  getRequestByStatus(status, uid) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    return this.http.post(this.apiUrl + "/post/getRequestByStatus", {status: status, uid: uid}, {headers: headers});
  }

  uploadFiles(formData) {
    let headers = new HttpHeaders();
    headers = headers.set("enctype", "multipart/form-data");
    return this.http.post(this.apiUrl + "/post/uploadAttachment", formData, {headers: headers}).toPromise();
  }

  assignCategoryToRequest(requestId, category) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    return this.http.post(this.apiUrl + "/post/assignCategory", {requestId: requestId, categoryId: category}, {headers: headers}).toPromise();
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

  /**
   * Update Request Status
   * @param id request id
   * @param status request status
   */
  updateRequestStatus(id, status, trackReqId) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    return this.http.post(this.apiUrl + "/post/updateStatus", {id: id, status: status, trackReqId: trackReqId}, {headers: headers});
  }

  provideInput(data) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    return this.http.post(this.apiUrl + "/post/provideInput", data, {headers: headers});
  }

  /**
   * Provide user's feedback to expert
   * @param feedback User Feedback: Object
   */
  provideFeedback(feedback) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    return this.http.post(this.apiUrl + "/review/provideReview", {feedback: feedback}, {headers: headers});    
  }

  /**
   * Provide expert's review for Request
   * @param expertComment Expert's Comment: Object
   */
  provideExpertComment(expertComment) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    return this.http.post(this.apiUrl + "/expert/provideExpertComment", {comment: expertComment}, {headers: headers});   
  }

  /**
   * Get Reviews of specific expert
   */
  getReviewByExpertId(expertId) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    return this.http.post(this.apiUrl + "/review/getReviewByExpertId", {expertId: expertId}, {headers: headers});  
  }

  savePaymentOption(data) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    return this.http.post(this.apiUrl + "/payment/saveOption", data, {headers: headers});  
  }

  saveRequestStatus(status) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    return this.http.post(this.apiUrl + "/post/saveRequestStatus", {status: status}, {headers: headers});
  }
}
