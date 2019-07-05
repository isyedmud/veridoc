import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-admin-assign-expert',
  templateUrl: './admin-assign-expert.page.html',
  styleUrls: ['./admin-assign-expert.page.scss'],
})
export class AdminAssignExpertPage implements OnInit {

  private arrExperts = [];
  private reqId = "";
  private isAssigned = false;

  constructor(
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.initPage();
  }

  async initPage() {
    this.reqId = this.route.snapshot.paramMap.get("reqId");
    const expertsLoader = await this.loadingCtrl.create({
      message: "Loading..."
    });
    await expertsLoader.present();

    this.arrExperts = [];

    this.apiService.getUsers("1")
      .subscribe((res: any) => {
        if(res.data) {
          for(let i = 0; i < res.data.length; i++) {
            if(res.data[i].isverified == true) {
              this.arrExperts.push(res.data[i]);
            }
          }
        }
        console.log(this.arrExperts);
        expertsLoader.dismiss();
      }, error => {
        console.log(error);
        expertsLoader.dismiss();
      })
  }

  onClickNavBack() {
    this.navCtrl.navigateBack('/menu/admin-requests');
  }

  async onClickAssignRequest(index) {
    const assignLoader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    await assignLoader.present();
    this.apiService.requestSetExpert({requestId: this.reqId, expertId: this.arrExperts[index]._id})
      .subscribe(() => {
        this.isAssigned = true;
        assignLoader.dismiss();
        this.toastService.showToast("Request is assigned successfully!");
      }, error => {
        console.log(error);
        assignLoader.dismiss();
        this.toastService.showToast("Operation Failed");
      })
  }

}
