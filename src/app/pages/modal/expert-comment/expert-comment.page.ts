import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-expert-comment',
  templateUrl: './expert-comment.page.html',
  styleUrls: ['./expert-comment.page.scss'],
})
export class ExpertCommentPage implements OnInit {
  @Input('title') title = "";
  @Input('placeholder') placeholder = "";

  private strExpertComment = "";

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  onClickSendExpertComment() {
    this.modalCtrl.dismiss(this.strExpertComment);
  }

  onClickCancelExpertComment() {
    this.modalCtrl.dismiss(null);
  }

}
