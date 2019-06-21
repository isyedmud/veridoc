import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController, AlertController, Events } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import md5 from 'md5';
import { ToastService } from 'src/app/services/toast/toast.service';
import { TERMSANDCONDITIONSTXT } from '../constants';

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

  constructor(
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private altCtrl: AlertController,
    private apiService: ApiService,
    private toastService: ToastService,
    public formBuilder: FormBuilder,
    private event: Events
  ) { 
    this.registerForm = formBuilder.group({
      email: ['', Validators.compose([Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      role: ['0'],
      fname: ['', Validators.compose([Validators.required])],
      lname: ['', Validators.compose([Validators.required])],
      dob: ['1970-01-01', Validators.compose([Validators.required])],
      username: ['', Validators.compose([Validators.required])],
      acceptTerms: [false, Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
  }

  /**
   * Signup User
   * Call signUp method in ApiService
   */
  async onClickSignupBtn() {
    this.submitAttempt = true;
    
    if(this.isAcceptedTerms == false) {
      this.toastService.showToast("Please accept our Terms and Conditions!");
      return;
    }
    if(this.registerForm.valid) {
      let reqData = {
        email: this.registerForm.controls.email.value,
        role: Number(this.registerForm.controls.role.value),
        fname: this.registerForm.controls.fname.value,
        lname: this.registerForm.controls.lname.value,
        birthday: this.registerForm.controls.dob.value,
        username: this.registerForm.controls.username.value,
        password: md5(this.registerForm.controls.password.value),
        isverified: false,
      };
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
          if(error.error.message) {
            this.toastService.showToast(error.error.message);
          } else {
            this.toastService.showToast(error.error.err.errors.email.message);
          }
        });
    }
  }

  onClickAvatar() {
    this.avatarSelector.nativeElement.click();
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
    if(this.isAcceptedTerms == true) {
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
