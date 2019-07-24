import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { CATEGORIES } from '../../constants';

@Component({
  selector: 'app-expert-detail',
  templateUrl: './expert-detail.page.html',
  styleUrls: ['./expert-detail.page.scss'],
})
export class ExpertDetailPage implements OnInit {

  private expertId = "";
  private expertInfo = null;
  private arrReviews = [];
  private arrCategories = CATEGORIES;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.initPage();
  }

  async initPage() {
    this.expertId = this.route.snapshot.paramMap.get("expertId");

    this.expertInfo = null;
    this.arrReviews = [];
    const reviewLoader = await this.loadingCtrl.create({
      message: "Loading..."
    });
    await reviewLoader.present();

    this.apiService.getReviewByExpertId(this.expertId)
      .subscribe((res: any) => {
        if(res.data) {
          if(res.data[0].mark) {
            this.expertInfo = {...res.data[0].expertsId};
            this.arrReviews = res.data;
          } else {
            this.expertInfo = {...res.data[0]};
          }
        }
        console.log(this.expertInfo);
        reviewLoader.dismiss();
      }, error => {
        console.log(error);
        reviewLoader.dismiss();
      })
  }

  onClickNavBack() {
    this.navCtrl.navigateBack('/our-experts');
  }

}
