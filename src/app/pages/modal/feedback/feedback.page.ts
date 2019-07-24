import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { LoadingController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  @Input('expertId') expertId: String;
  @Input('requestId') requestId: String;

  private strReview = "";
  private rate = 0;

  constructor(
    private apiService: ApiService,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  onModelChange(evt) {
    console.log(evt);
  }

  async onClickProvideFeedback() {
    const feedbackLoader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    await feedbackLoader.present();
    let feedback: any = {
      review: this.strReview,
      mark: this.rate,
      expertsId: this.expertId,
      userId: localStorage.getItem("uid"),
      requestId: this.requestId
    };

    try {
      let trackRequestResult: any = await this.apiService.saveRequestStatus(4).toPromise();
      feedback.trackReqId = trackRequestResult.data._id;
      await this.apiService.provideFeedback(feedback).toPromise();
      feedbackLoader.dismiss();
      this.modalCtrl.dismiss(0);
    } catch(error) {
      console.log(error);
      feedbackLoader.dismiss();
      this.modalCtrl.dismiss(1);
    }
  }

  onClickCancelBtn() {
    this.modalCtrl.dismiss(1);
  }

}
