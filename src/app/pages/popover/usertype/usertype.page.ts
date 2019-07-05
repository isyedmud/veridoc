import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-usertype',
  templateUrl: './usertype.page.html',
  styleUrls: ['./usertype.page.scss'],
})
export class UsertypePage implements OnInit {

  constructor(
    private popOver: PopoverController
  ) { }

  ngOnInit() {
  }

  onSelectUserType(type) {
    this.popOver.dismiss(type);
  }

}
