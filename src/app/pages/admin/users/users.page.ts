import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { CATEGORIES } from '../../constants';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  private arrUsers = [];
  private arrCategories = CATEGORIES;

  constructor(
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private apiService: ApiService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.initPage();
  }

  /**
   * Init Page
   * Get All Experts
   */
  async initPage() {
    this.arrUsers = [];
    const userLoader = await this.loadingCtrl.create({
      message: "Loading..."
    });
    await userLoader.present();
    this.apiService.getUsers("1")
      .subscribe((res: any) => {
        if(res.data) {
          for(let i = 0; i < res.data.length; i++) {
            // if(res.data[i].role == 1) {
              this.arrUsers.push({...res.data[i], expanded: false});
            // }
          }
        }
        userLoader.dismiss();
      }, error => {
        console.log(error);
        userLoader.dismiss();
      })
  }

  /**
   * Expand user info cell
   * @param index arrUsers array index
   */
  onClickExpandUserRow(index) {
    this.arrUsers[index].expanded = !this.arrUsers[index].expanded;
  }

  /**
   * Accept user
   * Update isverified field to true on user table
   * @param index arrUsers array index
   */
  async onClickAcceptUser(index) {
    const acceptLoader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    await acceptLoader.present();

    this.apiService.acceptUser(this.arrUsers[index]._id)
      .subscribe((res) => {
        acceptLoader.dismiss();
        this.toastService.showToast("User is accepted!");
        this.arrUsers[index].isverified = true;
      }, error => {
        console.log(error);
        acceptLoader.dismiss();
      })
  }

  onClickNavBack() {
    this.navCtrl.navigateBack('/menu/landing');
  }

}
