import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, NavController, Platform, Events } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import md5 from 'md5';
import { ApiService } from 'src/app/services/api/api.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private submitAttempt = false;

  /**
   * Form Group Validator
   */
  public loginForm: FormGroup;

  constructor(
    private altCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private apiService: ApiService,
    private toastService: ToastService,
    private navCtrl: NavController,
    private googlePlus: GooglePlus,
    private platform: Platform,
    public formBuilder: FormBuilder,
    private event: Events
  ) { 
    /**
     * Validate Form input fields.
     */
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
  }

  /**
   * Show Forgot password Dialog
   */
  async onClickForgotpwd() {
    const forgotAlt = await this.altCtrl.create({
      header: "Forgot Password?",
      inputs: [
        {
          name: 'value',
          type: 'email',
          placeholder: 'Email Address'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            this.resetPassword(data.value);
          }
        }
      ]
    });
    forgotAlt.present();
  }

  async resetPassword(email) {
    const resetPwdLoader = await this.loadingCtrl.create({
      message: "Please wait.."
    });
    await resetPwdLoader.present();
    this.apiService.resetPassword(email)
      .subscribe(() => {
        resetPwdLoader.dismiss();
        this.toastService.showToast("Password is reset");
      }, error => {
        console.log(error);
        resetPwdLoader.dismiss();
      });
  }

  /**
   * Login User
   */
  async onClickLogin() {
    this.submitAttempt = true;
    if(this.loginForm.valid) {
      const loginLoader = await this.loadingCtrl.create({
        message: "Please wait..."
      });
      await loginLoader.present();
      const credential = {
        email: this.loginForm.controls.email.value,
        password: md5(this.loginForm.controls.password.value)
      };
      this.apiService.login(credential)
        .subscribe(data => {
          loginLoader.dismiss();
          this.toastService.showToast("Login Successful!");
          localStorage.setItem("isLoggedIn", 'true');
          this.event.publish("onLoginStatusChange");
          this.navCtrl.navigateRoot('/menu/landing');
        }, error => {
          loginLoader.dismiss();
          console.log(error);
          this.toastService.showToast(error.error.message);
        });
    }
  }

  /**
   * Facebook Login
   */
  onClickFBLogin() {

  }

  /**
   * Google Plus Login
   * It checks the platform and use appropriate plugin
   * for mobile: Cordova plugin
   * for website: pure javascript
   */
  async onClickGPlusLogin() {
    const gplusLoader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    await gplusLoader.present();
    try {
      const user = await this.googlePlus.login({});
      const userInfo = {
        username: "",
        password: "",
        role: 0,
        email: user.email,
        fname: user.givenName,
        lname: user.familyName,
        birthday: ""
      };
      localStorage.setItem("isLoggedIn", 'true');
      this.apiService.signUp(userInfo)
        .subscribe(() => {
          gplusLoader.dismiss();
          this.event.publish("onLoginStatusChange");
          this.navCtrl.navigateRoot('/menu/landing');
        }, error => {
          console.log(error);
          gplusLoader.dismiss();
        });
    } catch(err) {
      console.log(err);
      gplusLoader.dismiss();
    }
  }

  /**
   * Navigate to signup page
   */
  onClickSignup() {
    this.navCtrl.navigateForward('/register');
  }

}
