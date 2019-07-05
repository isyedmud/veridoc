import { Component, OnInit, ViewChild } from '@angular/core';
import { CATEGORIES, PAYMENTOPTIONS } from '../../constants';
import { AlertController, Events, NavController, LoadingController } from '@ionic/angular';
import { MultiFileUploadComponent } from 'src/app/components/multi-file-upload/multi-file-upload.component';
import { ApiService } from 'src/app/services/api/api.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-expertsreview',
  templateUrl: './expertsreview.page.html',
  styleUrls: ['./expertsreview.page.scss'],
})
export class ExpertsreviewPage implements OnInit {
  @ViewChild(MultiFileUploadComponent) fileField: MultiFileUploadComponent;

  private arrCategories = CATEGORIES;

  private draftRequestId = "";
  private objDraftRequest = null;

  private requestCategory = 0;
  private isRequestBehalf = false;
  private initVerifyStep = 1;
  private isFinishCurrentStep = false;
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

  /**
   * Behalf request fields
   */
  private behalfofname = "";
  private behalfofrelation = "";
  private behalfofbod = "1/1/1970";
  private behalfofgender = "m";
  private behalfofcountry = "";

  private paymentOptFormSubmit = false;
  private paymentOptForm: FormGroup;

  constructor(
    private altCtrl: AlertController,
    private event: Events,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private apiService: ApiService,
    private toastService: ToastService,
    private route: ActivatedRoute,
    public formBuilder: FormBuilder,
  ) { 
    this.event.subscribe("onLoginStatusChange", data => {
      this.initPage();
    });
    this.paymentOptForm = formBuilder.group({
      accountholdername: ['', Validators.compose([Validators.required])],
      accountnumber: ['', Validators.compose([Validators.required])],
      ifsccode: ['', Validators.compose([Validators.required])],
      bankname: ['', Validators.compose([Validators.required])],
      bankaddress: ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.initPage();
  }

  initPage() {
    this.draftRequestId = this.route.snapshot.paramMap.get("requestId")=='null'?null: this.route.snapshot.paramMap.get("requestId");
    if(this.draftRequestId) {
      this.getDraftRequest();
    }
    this.isLoggedIn = localStorage.getItem("isLoggedIn") == 'true'?true: false;
  }

  async getDraftRequest() {
    const draftLoader = await this.loadingCtrl.create({
      message: "Loading..."
    });
    await draftLoader.present();
    this.apiService.getRequestById(this.draftRequestId)
      .subscribe((data: any) => {
        console.log(data);
        if(data.data) {
          this.strComment = data.data.comments;
          this.strQuery = data.data.queries;
          this.requestCategory = data.data.category;
          this.selectedPaymentOpt = data.data.paymentStatus;
          this.behalfofname = data.data.behalfofname;
          this.behalfofrelation = data.data.behalfofrelation;
          this.behalfofbod = data.data.behalfofbod;
          this.behalfofgender = data.data.behalfofgender;
          this.behalfofcountry = data.data.behalfofcountry;
          this.isRequestBehalf = data.data.isbehalfof;
        }
        draftLoader.dismiss();
      }, error => {
        console.log(error);
        draftLoader.dismiss();
      });
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
      // this.postRequest();
      this.onClickSavePayment();
    } else {
      if(this.initVerifyStep == 1) {
        let files = this.fileField.getFiles();

        let formData = new FormData();
        files.forEach((file) => {
          formData.append('attachments', file.rawFile, file.name);
        });

        try {
          let uploadResult = await this.apiService.uploadFiles(formData);
          Object.keys(uploadResult).map(key => {
            this.uploadedFiles.push(uploadResult[key]._id);
          });
          if(!this.isLoggedIn) {
            this.initVerifyStep++;
            await userTypeAlt.present();
          } else {
            this.initVerifyStep = 3;
          }
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

    let postData: any = {
      category: this.requestCategory,
      user: localStorage.getItem("uid"),
      comments: this.strComment,
      queries: this.strQuery,
      status: 1,
      files: this.uploadedFiles,
      paymentStatus: 0,
      isbehalfof: this.isRequestBehalf,
      behalfofname: this.behalfofname,
      behalfofrelation: this.behalfofrelation,
      behalfofbod: this.behalfofbod,
      behalfofgender: this.behalfofgender,
      behalfofcountry: this.behalfofcountry,
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
      if(this.initVerifyStep == 3) {
        if(!this.isLoggedIn) {
          this.initVerifyStep--;    
        } else {
          this.initVerifyStep = 1;
        }
      } else {
        this.initVerifyStep--;
      }
    }    
  }

  /**
   * Highlight selected paymentoption
   * @param index payment option index
   */
  onChangePaymentOption(index) {
    this.selectedPaymentOpt = index;
  }

  async onClickSavePayment() {
    this.paymentOptFormSubmit = true;
    if(this.paymentOptForm.valid) {
      const savePaymentOptLoader = await this.loadingCtrl.create({
        message: "Please wait..."
      });

      await savePaymentOptLoader.present();

      const paymentRequestData = {
        method: this.selectedPaymentOpt,
        accountholdername: this.paymentOptForm.controls.accountholdername.value,
        accountnumber: this.paymentOptForm.controls.accountnumber.value,
        ifsccode: this.paymentOptForm.controls.ifsccode.value,
        bankname: this.paymentOptForm.controls.bankname.value,
        bankaddress: this.paymentOptForm.controls.bankaddress.value,
        userid: localStorage.getItem("uid")
      }
  
      this.apiService.savePaymentOption(paymentRequestData)
        .subscribe((data: any) => {
          console.log(data);
          savePaymentOptLoader.dismiss();
          this.postRequest();
          // this.toastService.showToast("Payment option is saved now.");
        }, error => {
          console.log("Save Paymentoption failed!");
          savePaymentOptLoader.dismiss();
          this.toastService.showToast("Save Paymentoption failed!");
        })
    } else {
      this.toastService.showToast("Please input necessary fields!");
    }
  }

  onClickNavBack() {
    this.navCtrl.navigateBack('/menu/landing');
  }

}
