import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { NavController, LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  /**
   * Variable for userinfo: object
   */
  private userInfo: UserInfo;

  private isShowCalendar = false;

  private calendar = {
    mode: 'month',
    currentDate: null
  }

  constructor(
    private myUtils: UtilsService,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private apiService: ApiService
  ) { 
    this.userInfo = {};
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.initPage();
  }

  /**
   * Init Page variables
   */
  initPage() {
    this.loadUserProfile();
  }

  async loadUserProfile() {
    const profileLoader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    await profileLoader.present();
    const uid = localStorage.getItem("uid");
    this.apiService.getUser(uid)
      .subscribe((res: any) => {
        this.userInfo = {
          username: res.user.username?res.user.username: '',
          fname: res.user.fname?res.user.fname: '',
          lname: res.user.lname?res.user.lname: '',
          email: res.user.email?res.user.email: '',
          birthday: res.user.birthday?res.user.birthday: '',
          uid: uid
        };
        this.calendar.currentDate = new Date(this.userInfo.birthday)
        console.log(this.userInfo);
        profileLoader.dismiss();
      }, error => {
        console.log(error);
        profileLoader.dismiss();
      })
  }

  onClickNavBack() {
    this.navCtrl.navigateBack('/menu/landing');
  }

  /**
   * Update Profile Setting
   */
  async onClickBtnSave() {
    const updateLoader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    await updateLoader.present();
    this.apiService.updateUser(this.userInfo)
      .subscribe(() => {
        updateLoader.dismiss();
      }, error => {
        console.log(error);
        updateLoader.dismiss();
      })
  }

  onClickBirthDay() {
    this.isShowCalendar = !this.isShowCalendar;
  }

  onCurrentDateChanged(evt) {
    let d = new Date(evt);
    this.userInfo.birthday = d.getFullYear()+ "-" + (d.getMonth() + 1) + "-" + d.getDate();
  }

}

interface UserInfo {
  uid?: String,
  username?: String,
  fname?: String,
  lname?: String,
  email?: String,
  birthday?: string
}