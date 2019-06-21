import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { ApiService } from '../../../services/api/api.service';
import { SERVERASSETS } from '../../constants';

@Component({
  selector: 'app-mydocuments',
  templateUrl: './mydocuments.page.html',
  styleUrls: ['./mydocuments.page.scss'],
})
export class MydocumentsPage implements OnInit {

  private arrMyRequests = [];
  private serverAssetsPath = SERVERASSETS;

  constructor(
    private navCtrl: NavController,
    private apiService: ApiService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.initPage();
  }

  async initPage() {
    const requestLoader = await this.loadingCtrl.create({
      message: "Loading..."
    });
    await requestLoader.present();

    try {
      const uid = localStorage.getItem("uid");
      this.apiService.getRequest(uid)
        .subscribe((res: any) => {
          this.arrMyRequests = res.data;
          console.log(this.arrMyRequests);
          requestLoader.dismiss();
        });
    } catch(err) {
      console.log(err);
      requestLoader.dismiss();
    }
  }

  /**
   * View Attachment file
   * @param path file path
   */
  onClickAttachment(path) {
    window.open(this.serverAssetsPath + path, '_blank');
  }

  onClickNavBack() {
    this.navCtrl.navigateBack('/menu/request-list');
  }

}
