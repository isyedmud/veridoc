import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { LoadingController, NavController, Platform } from '@ionic/angular';
import { CATEGORIES } from '../../constants';

@Component({
  selector: 'app-our-experts',
  templateUrl: './our-experts.page.html',
  styleUrls: ['./our-experts.page.scss'],
})
export class OurExpertsPage implements OnInit {

  private isMobile = false;
  private arrExperts = [];
  private colSize = "4";
  private arrCategories = CATEGORIES;

  constructor(
    private apiService: ApiService,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private platform: Platform
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.initPage();
  }

  async initPage() {
    this.isMobile = this.platform.is("mobile");
    const expertsLoader = await this.loadingCtrl.create({
      message: "Loading..."
    });
    await expertsLoader.present();

    this.arrExperts = [];
    this.apiService.getUsers(1)
      .subscribe((data: any) => {
        if(data.data) {
          for(let i = 0; i < data.data.length; i++) {
            if(data.data[i].highlight == true) {
              this.arrExperts.push({...data.data[i], isExpanded: false});
            }
          }
          this.arrExperts.sort((a, b) => (b.experiencedyear > a.experiencedyear) ? 1 : ((a.experiencedyear > b.experiencedyear) ? -1 : 0))
        }
        console.log(this.arrExperts);
        expertsLoader.dismiss();
      }, error => {
        console.log(error);
        expertsLoader.dismiss();
      })
  }

  /**
   * Expand Expert Info
   * @param index arrExpers array index
   */
  onHighlightExpert(index) {
    if(!this.isMobile) {
      this.arrExperts[index].isExpanded = true;
    }
  }

  onLowlightExpert(index) {
    if(!this.isMobile) {
      this.arrExperts[index].isExpanded = false;
    }
  }

  /**
   * Click Expert Item
   * Mobile: None
   * Browser: View Profile
   * @param index 
   * @param expert expert object
   */
  onClickExpert(index) {
    this.navCtrl.navigateForward('/expert-detail/' + this.arrExperts[index]._id);
  }

  onClickNavBack() {
    this.navCtrl.navigateBack('/menu/landing');
  }

}
