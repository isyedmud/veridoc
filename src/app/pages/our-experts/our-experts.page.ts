import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-our-experts',
  templateUrl: './our-experts.page.html',
  styleUrls: ['./our-experts.page.scss'],
})
export class OurExpertsPage implements OnInit {

  constructor(
    private apiService: ApiService,
    private loadingCtrl: LoadingController
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

    this.apiService.getUsers('1')
      .subscribe((data) => {
        console.log(data);
        expertsLoader.dismiss();
      }, error => {
        expertsLoader.dismiss();
      })
  }

}
