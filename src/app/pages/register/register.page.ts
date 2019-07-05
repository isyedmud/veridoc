import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController, AlertController, Events, ActionSheetController, Platform, PopoverController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import md5 from 'md5';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastService } from 'src/app/services/toast/toast.service';
import { TERMSANDCONDITIONSTXT } from '../constants';
import { UsertypePage } from '../popover/usertype/usertype.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @ViewChild('avatarSelector') avatarSelector: ElementRef;

  /**
   * Form Group Validator
   */
  private submitAttempt = false;
  private registerForm: FormGroup;

  private isAcceptedTerms = false;

  /**
   * terms and conditions text
   */
  private txtTerms = TERMSANDCONDITIONSTXT;

  /**
   * User Role
   * 0: normal user
   * 1: expert
   * if role == 1
   *  add experience year field
   */
  private userRole = 0;

  /**
   * Avatar Image(base64)
   */
  private avatarImg: String = "assets/imgs/img-default-profile.svg";

  constructor(
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private altCtrl: AlertController,
    private apiService: ApiService,
    private toastService: ToastService,
    public formBuilder: FormBuilder,
    private event: Events,
    private actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private platform: Platform,
    private popOver: PopoverController
  ) {
    this.registerForm = formBuilder.group({
      email: ['', Validators.compose([Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      role: ['0'],
      fname: ['', Validators.compose([Validators.required])],
      lname: ['', Validators.compose([Validators.required])],
      dob: ['1970-01-01', Validators.compose([Validators.required])],
      username: ['', Validators.compose([Validators.required])],
      acceptTerms: [false, Validators.compose([Validators.required])],
      experiencedyear: [0],
      category: ['0'],
      title: [''],
      headline: ['']
    });
  }

  ngOnInit() {
  }

  async onSelectUserRole() {
    const userTypePopover = await this.popOver.create({
      component: UsertypePage,
      event
    });
    await userTypePopover.present();
    try {
      const result = await userTypePopover.onDidDismiss();
      if(result.data !== undefined) {
        this.userRole = result.data;
      }
    } catch(err) {
      console.log(err);
    }
    console.log(this.userRole);
  }

  /**
   * Signup User
   * Call signUp method in ApiService
   */
  async onClickSignupBtn() {
    this.submitAttempt = true;

    if (this.isAcceptedTerms == false) {
      this.toastService.showToast("Please accept our Terms and Conditions!");
      return;
    }
    if (this.registerForm.valid) {
      let reqData = {
        email: this.registerForm.controls.email.value,
        role: Number(this.registerForm.controls.role.value),
        fname: this.registerForm.controls.fname.value,
        lname: this.registerForm.controls.lname.value,
        birthday: this.registerForm.controls.dob.value,
        username: this.registerForm.controls.username.value,
        password: md5(this.registerForm.controls.password.value),
        experiencedyear: this.registerForm.controls.role.value == '1' ? this.registerForm.controls.experiencedyear.value : 0,
        isverified: false,
        highlight: false,
        title: this.registerForm.controls.role.value=='1'?this.registerForm.controls.title.value: "",
        headline: this.registerForm.controls.role.value=='1'?this.registerForm.controls.headline.value: "",
        category: this.registerForm.controls.role.value == '1' ? this.registerForm.controls.category.value : 'null',
        avatar: this.avatarImg
      };

      console.log(reqData);

      const signupLoader = await this.loadingCtrl.create({
        message: "Please wait..."
      });
      await signupLoader.present();
      this.apiService.signUp(reqData)
        .subscribe((res: any) => {
          signupLoader.dismiss();
          this.toastService.showToast("Successfully Registered!");
          localStorage.setItem("isLoggedIn", 'true');
          localStorage.setItem("uid", res.user._id);
          localStorage.setItem("role", res.user.role);
          this.event.publish("onLoginStatusChange");
          this.navCtrl.navigateRoot('/menu/landing');
        }, (error: any) => {
          console.log(error);
          signupLoader.dismiss();
          if (error.error.message) {
            this.toastService.showToast(error.error.message);
          } else {
            this.toastService.showToast(error.error.err.errors.email.message);
          }
        });
    }
  }

  /**
   * Select or take image for avatar
   * if platform is mobile
   *  show actionsheet
   * else
   *  only select image
   */
  async onClickAvatar() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albums',
      buttons: [
        {
          text: 'Select Image',
          icon: 'document',
          handler: () => {
            this.avatarSelector.nativeElement.click();
          }
        }, {
          text: 'Take Photo',
          icon: 'camera',
          handler: () => {
            this.getImageFromCamera();
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    if(this.platform.is("mobile")) {
      await actionSheet.present();
    } else {
      this.avatarSelector.nativeElement.click();
    }
  }

  async getImageFromCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    try {
      this.avatarImg = await this.camera.getPicture(options);
      console.log(this.avatarImg);
    } catch(err) {
      console.log(err);
    }
  }

  onSelectAvatarImage() {
    this.getBase64(this.avatarSelector.nativeElement.files[0]);
  }

  getBase64(file) {
    var self = this;
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      self.avatarImg = new String(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  /**
   * Navigate to login page
   */
  onClickAlreadyRegisteredBtn() {
    this.navCtrl.navigateForward('/login');
  }

  /**
   * Show Terms and Conditions
   */
  async onChangeTermsAndConditions(evt) {
    this.isAcceptedTerms = evt.detail.checked;
    if (this.isAcceptedTerms == true) {
      const termsAlt = await this.altCtrl.create({
        header: "Terms and Conditions",
        message: this.txtTerms,
        buttons: ['OK']
      });
      await termsAlt.present();
    }
  }

  onClickNavBack() {
    this.navCtrl.navigateBack('/menu/landing');
  }

}
