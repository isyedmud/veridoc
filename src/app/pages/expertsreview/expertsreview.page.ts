import { Component, OnInit } from '@angular/core';
import { CATEGORIES, PAYMENTOPTIONS } from '../constants';
import { AlertController, Events, NavController } from '@ionic/angular';

@Component({
  selector: 'app-expertsreview',
  templateUrl: './expertsreview.page.html',
  styleUrls: ['./expertsreview.page.scss'],
})
export class ExpertsreviewPage implements OnInit {
  private initVerifyStep = 1;
  private isFinishCurrentStep = false;
  private arrCategories = CATEGORIES;
  private arrPaymentopts = PAYMENTOPTIONS;
  private defaultPaymentOpt = 0;
  private isLoggedIn: boolean;

  constructor(
    private altCtrl: AlertController,
    private event: Events,
    private navCtrl: NavController
  ) { 
    this.event.subscribe("onLoginStatusChange", data => {
      this.initPage();
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.initPage();
  }

  initPage() {
    this.isLoggedIn = localStorage.getItem("isLoggedIn") == 'true'?true: false;
  }

  async onClickNext() {
    const userTypeAlt = await this.altCtrl.create({
      header: "Is New User?",
      subHeader: "",
      inputs: [
        {
          type:'radio',
          label:'Yes',
          value:'0',
          checked: true
        },
        {
          type:'radio',
          label:'No',
          value:'1'
        }
      ],
      buttons: [
        {
          text: 'Ok',
          handler: (data) => {
            if(data == "1") {
              this.initVerifyStep++;
            }
          }
        }
      ]
    });
    if(this.initVerifyStep >= 3) {
      this.initVerifyStep = 3;
    } else {
      this.initVerifyStep++;
      if(this.initVerifyStep == 2) {
        await userTypeAlt.present(); 
      }
    }
  }

  onClickSelectFile() {
    const fileInput = document.getElementById("verify-progress-file-selector");
    fileInput.click();
  }

  onSelectFile(evt) {
    console.log(evt);
  }

  onClickBack() {
    if(this.initVerifyStep <= 1) {
      this.initVerifyStep = 1;
    } else {
      this.initVerifyStep--;
    }    
  }

  onClickNavBack() {
    this.navCtrl.navigateBack('/menu/landing');
  }

}
