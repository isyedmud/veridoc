import { Component, OnInit } from '@angular/core';
import { PAYMENTOPTIONS } from '../constants';
import { NavController, LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-pay-opt',
  templateUrl: './pay-opt.page.html',
  styleUrls: ['./pay-opt.page.scss'],
})
export class PayOptPage implements OnInit {

  private arrPaymentOpts = PAYMENTOPTIONS;
  private objPaymentOpt = null;

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

  async initPage() {
    this.objPaymentOpt = null;
    const profileLoader = await this.loadingCtrl.create({
      message: "Loading..."
    });
    await profileLoader.present();

    try {
      const getProfileRequest: any = await this.apiService.getUser(localStorage.getItem("uid")).toPromise();
      if(getProfileRequest.user.paymentoption) {
        this.objPaymentOpt = getProfileRequest.user.paymentoption;
      }
      console.log(getProfileRequest);
      profileLoader.dismiss();
    } catch(error) {
      console.log(error);
      profileLoader.dismiss();
      this.toastService.showToast("Operation failed!");      
    }
  }

  onClickNavBack() {
    this.navCtrl.navigateBack('/menu/landing');
  }

}
