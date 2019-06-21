import { Component, OnInit, ViewChild } from '@angular/core';
import { CATEGORIES, PAYMENTOPTIONS } from '../../constants';
import { AlertController, Events, NavController, LoadingController } from '@ionic/angular';
import { MultiFileUploadComponent } from 'src/app/components/multi-file-upload/multi-file-upload.component';
import { ApiService } from 'src/app/services/api/api.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-expertsreview',
  templateUrl: './expertsreview.page.html',
  styleUrls: ['./expertsreview.page.scss'],
})
export class ExpertsreviewPage implements OnInit {
  @ViewChild(MultiFileUploadComponent) fileField: MultiFileUploadComponent;

  private initVerifyStep = 1;
  private isFinishCurrentStep = false;
  private arrCategories = CATEGORIES;
  private arrPaymentopts = PAYMENTOPTIONS;
  private selectedPaymentOpt = 0;
  private isLoggedIn: boolean;
  private uploadedFiles = [];

  /**
   * query string
   */
  private strQuery = "";

  /**
   * comment string
   */
  private strComment = "";

  constructor(
    private altCtrl: AlertController,
    private event: Events,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private apiService: ApiService,
    private toastService: ToastService
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

  /**
   * Show Next step
   * and upload attachments
   */
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
      this.postRequest();
    } else {
      if(this.initVerifyStep == 1) {
        let files = this.fileField.getFiles();

        let formData = new FormData();
        files.forEach((file) => {
          formData.append('attachments', file.rawFile, file.name);
        });

        try {
          let uploadResult = await this.apiService.uploadFiles(formData);
          console.log(uploadResult);
          Object.keys(uploadResult).map(key => {
            this.uploadedFiles.push(uploadResult[key]._id);
          });
          this.initVerifyStep++;
          await userTypeAlt.present();
        } catch(err) {
          console.log(err);
          this.toastService.showToast("Uploading file failed!");
        }
      }
    }
  }

  /**
   * Post Requeust
   */
  async postRequest() {
    const postLoader = await this.loadingCtrl.create({
      message: "Please wait..."
    });

    const postData = {
      user: localStorage.getItem("uid"),
      expert: "",
      comments: this.strComment,
      queries: this.strQuery,
      status: 0,
      files: this.uploadedFiles,
      paymentStatus: 0
    };
    await postLoader.present();
    this.apiService.postRequest(postData)
      .subscribe(data => {
        this.uploadedFiles = [];
        postLoader.dismiss();
        this.toastService.showToast("Successfully Requested!");
        this.navCtrl.navigateBack('/menu/landing');
      }, error => {
        console.log(error);
        postLoader.dismiss();
        this.toastService.showToast("Request failed!");
      })
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
