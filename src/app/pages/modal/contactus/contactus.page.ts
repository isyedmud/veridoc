import { Component, OnInit } from '@angular/core';
import { CONTACTINFO } from '../../constants';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
})
export class ContactusPage implements OnInit {

  private contactInfo = CONTACTINFO;
  private userEmail = "";
  private userPhone = "";
  private userMsg = "";

  constructor(
    private emailComposer: EmailComposer,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  async onClickSendBtn() {
    // let email = {
    //   to: this.contactInfo.email,
    //   cc: '',
    //   bcc: [],
    //   attachments: [],
    //   subject: "Contact message",
    //   body: this.userMsg,
    //   isHtml: false
    // }
    // await this.emailComposer.open(email);
    this.modalCtrl.dismiss();
  }

}
