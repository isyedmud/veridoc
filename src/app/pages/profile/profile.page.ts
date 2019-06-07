import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  /**
   * Variable for userinfo: object
   */
  private userInfo = {};

  constructor(
    private myUtils: UtilsService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.initPage();
  }

  initPage() {
    this.userInfo = this.myUtils.getUserInfo();
  }

  onClickNavBack() {
    this.navCtrl.navigateBack('/menu/landing');
  }

  /**
   * Save Profile Setting
   */
  onClickBtnSave() {
    this.navCtrl.navigateBack('/menu/landing');
  }

}
