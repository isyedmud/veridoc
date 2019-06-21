import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { STATUS } from '../../constants';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.page.html',
  styleUrls: ['./request-list.page.scss'],
})
export class RequestListPage implements OnInit {

  private arrMyRequests = [];
  private arrStatus = STATUS;

  constructor(
    private apiService: ApiService,
    private loadingCtrl: LoadingController,
    private altCtrl: AlertController,
    private toastService: ToastService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.initPage();
  }

  /**
   * Init Variables
   */
  initPage() {
    this.getRequests();
  }

  /**
   * Get My Requests
   * @returns array of request
   */
  async getRequests() {
    const uid = localStorage.getItem("uid");
    const dataLoader = await this.loadingCtrl.create({
      message: "Loading..."
    });
    await dataLoader.present();
    this.apiService.getRequest(uid)
      .subscribe((res: any) => {
        this.arrMyRequests = [];
        if(res.data) {
          for(let i = 0; i < res.data.length; i++) {
            if(res.data[i].status !== 2) {
              this.arrMyRequests.push(res.data[i]);
            }
          }
        }
        dataLoader.dismiss();
        console.log("Result", this.arrMyRequests);
      }, error => {
        console.log(error);
        dataLoader.dismiss();
      });
  }

  /**
   * navigate to new request page
   */
  onClickNewRequest() {
    this.navCtrl.navigateForward('/menu/expertsreview');
  }

  /**
   * Ask user whether close the request or not
   * @param index: index of request array
   * @returns null
   */
  async onClickCloseRequest(index) {
    const closeAlt = await this.altCtrl.create({
      header: "Close Request?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            
          }
        }, 
        {
          text: 'Ok',
          handler: (data) => {
            this.closeRequest(this.arrMyRequests[index]._id);
          }
        }
      ]
    });
    await closeAlt.present();
  }

  /**
   * Delete Request
   * @param requestId 
   * @returns null
   */
  async closeRequest(requestId) {
    const closeLoader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    await closeLoader.present();
    this.apiService.closeRequest(requestId)
      .subscribe(() => {
        closeLoader.dismiss();
        this.toastService.showToast("Request is closed!");
        this.getRequests();
      }, error => {
        console.log(error);
        closeLoader.dismiss();
        this.toastService.showToast("Close request is failed!");
      })
  }

  /**
   * View All uploaded doc by user
   */
  onClickMyDocuments() {
    this.navCtrl.navigateForward('/mydocuments');
  }

  /**
   * Back to landing page
   */
  onClickNavBack() {
    this.navCtrl.navigateBack('/menu/landing');
  }
}
