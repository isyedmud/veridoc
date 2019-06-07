import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-request',
  templateUrl: './user-request.page.html',
  styleUrls: ['./user-request.page.scss'],
})
export class UserRequestPage implements OnInit {

  private userInfo = {};

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.initPage();
  }

  initPage() {
    this.userInfo = {
      username: "Test info"
    }
  }

}
