import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-our-experts',
  templateUrl: './our-experts.page.html',
  styleUrls: ['./our-experts.page.scss'],
})
export class OurExpertsPage implements OnInit {

  private arrExperts = [];

  constructor(
    private apiService: ApiService,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.initPage();
  }

  async initPage() {
    const expertsLoader = await this.loadingCtrl.create({
      message: "Loading..."
    });
    await expertsLoader.present();

    this.arrExperts = [];
    this.apiService.getUsers('1')
      .subscribe((data: any) => {
        if(data.data) {
          for(let i = 0; i < data.data.length; i++) {
            if(data.data[i].highlight == true) {
              this.arrExperts.push(data.data[i]);
            }
          }
          this.arrExperts.sort((a, b) => (b.experiencedyear > a.experiencedyear) ? 1 : ((a.experiencedyear > b.experiencedyear) ? -1 : 0))
        }
        expertsLoader.dismiss();
      }, error => {
        console.log(error);
        expertsLoader.dismiss();
      })
  }

  /**
   * View Expert Detail
   * @param index arrExpers array index
   */
  onClickExpert(index) {
    this.navCtrl.navigateForward('/expert-detail/' + this.arrExperts[index]._id);
  }

  onClickNavBack() {
    this.navCtrl.navigateBack('/menu/landing');
  }

}
