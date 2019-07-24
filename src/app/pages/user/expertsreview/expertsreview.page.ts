import { Component, OnInit, ViewChild } from '@angular/core';
import { CATEGORIES, PAYMENTOPTIONS } from '../../constants';
import { AlertController, Events, NavController, LoadingController } from '@ionic/angular';
import { MultiFileUploadComponent } from 'src/app/components/multi-file-upload/multi-file-upload.component';
import { ApiService } from 'src/app/services/api/api.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import md5 from 'md5';

@Component({
  selector: 'app-expertsreview',
  templateUrl: './expertsreview.page.html',
  styleUrls: ['./expertsreview.page.scss'],
})
export class ExpertsreviewPage implements OnInit {
  @ViewChild(MultiFileUploadComponent) fileField: MultiFileUploadComponent;

  private objUserInfo = null;

  private arrCategories = CATEGORIES;

  private draftFiles = [];
  private arrDraftTrackReq = [];

  private requestId = "";
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
  private secondStepForm: FormGroup;

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
    });

    this.secondStepForm = formBuilder.group({
      fname: ['', Validators.compose([Validators.required])],
      lname: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), Validators.required])],
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      dob: ['1970-01-01', Validators.compose([Validators.required])],
    })
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.initPage();
  }

  /**
   * Initialize page
   */
  async initPage() {
    /**
     * Init variables
     */
    this.objUserInfo = null;
    this.draftFiles = [];
    this.requestId = "";
    this.objDraftRequest = null;
    this.requestCategory = 0;
    this.isRequestBehalf = false;
    this.initVerifyStep = 1;
    this.isFinishCurrentStep = false;
    this.selectedPaymentOpt = 0;
    this.isLoggedIn = false;
    this.uploadedFiles = [];
    this.strComment = "";
    this.strQuery = "";
    this.behalfofname = "";
    this.behalfofrelation = "";
    this.behalfofbod = "1/1/1970";
    this.behalfofgender = "m";
    this.behalfofcountry = "";
    this.paymentOptFormSubmit = false;


    this.requestId = this.route.snapshot.paramMap.get("requestId")=='null'?null: this.route.snapshot.paramMap.get("requestId");
    this.draftFiles = [];
    this.isLoggedIn = localStorage.getItem("isLoggedIn") == 'true'?true: false;
    if(!this.requestId && this.isLoggedIn) {
      this.checkDraftRequest();
    }
    if(this.isLoggedIn) {
      const userInfoLoader = await this.loadingCtrl.create({
        message: "Loading..."
      });
      await userInfoLoader.present();
      await this.getUserInfo();
      userInfoLoader.dismiss();
    }
  }

  /**
   * Get logged in user's info
   */
  async getUserInfo() {
    try {
      let result: any = await this.apiService.getUser(localStorage.getItem("uid")).toPromise();
      this.objUserInfo = result.user;
      this.secondStepForm.controls['fname'].setValue(this.objUserInfo.fname);
      this.secondStepForm.controls['lname'].setValue(this.objUserInfo.lname);
      this.secondStepForm.controls['dob'].setValue(this.objUserInfo.birthday);
      this.secondStepForm.controls['email'].setValue(this.objUserInfo.email);
      this.secondStepForm.controls['username'].setValue(this.objUserInfo.username);
      this.secondStepForm.controls['password'].setValue(this.objUserInfo.password);
    } catch(error) {
      console.log(error);
    }
  }

  /**
   * Check user if have draft request
   */
  async checkDraftRequest() {
    this.draftFiles = [];
    this.arrDraftTrackReq = [];
    const draftLoader = await this.loadingCtrl.create({
      message: "Loading..."
    });
    await draftLoader.present();
    this.apiService.getRequestByStatus(0, localStorage.getItem("uid"))
      .subscribe((data: any) => {
        if(data.data) {
          let draft = data.data.length > 1?data.data[data.data.length - 1]: data.data[0];
          if(draft) {
            this.strComment = draft.comments;
            this.strQuery = draft.queries;
            this.requestCategory = draft.category;
            this.selectedPaymentOpt = draft.paymentStatus;
            this.behalfofname = draft.behalfofname;
            this.behalfofrelation = draft.behalfofrelation;
            this.behalfofbod = draft.behalfofbod;
            this.behalfofgender = draft.behalfofgender;
            this.behalfofcountry = draft.behalfofcountry;
            this.isRequestBehalf = draft.isbehalfof;
            this.draftFiles = draft.files;
            this.arrDraftTrackReq = draft.trackRequest;
          }
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
    if(this.initVerifyStep >= 3) {
      this.initVerifyStep = 3;
      // this.postRequest();
      this.onClickSavePayment();
    } else {
      if(this.initVerifyStep == 1) {
        let files = this.fileField.getFiles();
        let draftFiles = this.fileField.getDraftFiles();

        let formData = new FormData();
        files.forEach((file) => {
          formData.append('attachments', file.rawFile, file.name);
        });

        try {
          let uploadResult = await this.apiService.uploadFiles(formData);
          Object.keys(uploadResult).map(key => {
            this.uploadedFiles.push(uploadResult[key]._id);
          });
          Object.keys(draftFiles).map(key => {
            this.uploadedFiles.push(draftFiles[key]._id);
          });
          this.initVerifyStep++;
        } catch(err) {
          console.log(err);
          this.toastService.showToast("Uploading file failed!");
        }
      } else {
        if(this.isLoggedIn) {
          this.initVerifyStep++;
        } else {
          this.toastService.showToast("Please signup before place your request!");
        }      
      }
    }
  }

  /**
   * Post Requeust
   */
  async postRequest(status) {
    const postLoader = await this.loadingCtrl.create({
      message: "Please wait..."
    });

    if(status == 0) {
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
      } catch(error) {
        console.log(error);
        postLoader.dismiss();
        this.toastService.showToast("Upload files failed!");
      }
    }


    let postData: any = {
      category: this.requestCategory,
      user: localStorage.getItem("uid"),
      comments: this.strComment,
      queries: this.strQuery,
      status: status,
      files: this.uploadedFiles,
      paymentStatus: 0,
      isbehalfof: this.isRequestBehalf,
      behalfofname: this.behalfofname,
      behalfofrelation: this.behalfofrelation,
      behalfofbod: this.behalfofbod,
      behalfofgender: this.behalfofgender,
      behalfofcountry: this.behalfofcountry,
      trackRequest: []
    };

    await postLoader.present();
    try {
      let trackRequestResult: any = await this.apiService.saveRequestStatus(postData.status).toPromise();
      if(this.arrDraftTrackReq.length > 0) {
        for(let i = 0; i < this.arrDraftTrackReq.length; i++) {
          postData.trackRequest.push(this.arrDraftTrackReq[i]);
        }
      }
      postData.trackRequest.push(trackRequestResult.data._id);
      await this.apiService.postRequest(postData).toPromise();
      this.uploadedFiles = [];
      postLoader.dismiss();
      this.toastService.showToast("Successfully Requested!");
      this.navCtrl.navigateBack('/menu/landing');
    } catch(error) {
      console.log(error);
      postLoader.dismiss();
      this.toastService.showToast("Request failed!");
    }
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

  /**
   * Save Payment option
   */
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
          this.postRequest(1);
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

  /**
   * Save Draft Request
   */
  onClickSave() {
    this.postRequest(0);
  }

  /**
   * Register User if not loggedin
   */
  async onClickSignup() {
    const newUser = {
      email: this.secondStepForm.controls.email.value,
      role: 0,
      fname: this.secondStepForm.controls.fname.value,
      lname: this.secondStepForm.controls.lname.value,
      birthday: this.secondStepForm.controls.dob.value,
      username: this.secondStepForm.controls.username.value,
      password: md5(this.secondStepForm.controls.password.value),
      experiencedyear: 0,
      isverified: false,
      highlight: false,
      title: "",
      headline: "",
      category: 'null',
      avatar: "assets/imgs/img-default-profile.svg",
      expertbio: "",
      expertschool: "",
      expertresidency: "",
      expertinternship: "",
      expertdegree: "",
      expertaward: ""
    };

    const signupLoader = await this.loadingCtrl.create({
      message: "Please wait..."
    });

    await signupLoader.present();
    this.apiService.signUp(newUser)
      .subscribe((res: any) => {
        signupLoader.dismiss();
        this.toastService.showToast("Successfully Registered!");
        localStorage.setItem("isLoggedIn", 'true');
        localStorage.setItem("uid", res.user._id);
        localStorage.setItem("role", res.user.role);
        this.event.publish("onLoginStatusChange");
      }, (error: any) => {
        console.log(error);
        signupLoader.dismiss();
        if(error.error.message) {
          this.toastService.showToast(error.error.message);
        } else if(error.error.err.errors.email.message) {
          this.toastService.showToast(error.error.err.errors.email.message);
        } else if(error.message) {
          this.toastService.showToast(error.message);
        }
      });
  }

  /**
   * Change Gender
   * @param gender string
   * m: Male
   * f: Female
   */
  onChangeGender(gender) {
    this.behalfofgender = gender;
  }

  /**
   * Navigate back to landing page
   */
  onClickNavBack() {
    this.navCtrl.navigateBack('/menu/landing');
  }

}
