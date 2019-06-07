import { Component, OnInit } from '@angular/core';
import { NavController, Events, AlertController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  /**
   * Array for page menu
   */
  private pages = [];

  constructor(
    private navCtrl: NavController,
    private event: Events,
    private altCtrl: AlertController,
    private toastService: ToastService
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.initPage();
  }

  initPage() {
    const isLoggedIn = localStorage.getItem("isLoggedIn")=='true'?true: false;
    if(isLoggedIn == false) {
      this.pages = [
        {
          id: 3,
          name: "Login"
        },
        {
          id: 4,
          name: "Signup"
        },
      ];
    } else {
      this.pages = [
        {
          id: 5,
          name: "Request"
        },
        {
          id: 6,
          name: "My profile"
        },
        {
          id: 7,
          name: "Payment Option"
        },
        {
          id: 8,
          name: "Change Password"
        },
        {
          id: 9,
          name: "Delete Account"
        },
        {
          id: 11,
          name: "Log Out"
        },
      ]
    }
  }

  /**
   * Navigate to pages based on pageindex
   * @param pageindex: Number
   */
  onClickMainMenuItem(pageindex) {
    switch(pageindex) {
      case 3:
        this.navCtrl.navigateForward('/login');
        break;
      case 4: 
        this.navCtrl.navigateForward('/register');
        break;
      case 5: 
        this.navCtrl.navigateForward('/menu/expertsreview');
        break;
      case 6:
        this.navCtrl.navigateForward('/profile');
        break;
      case 7:
        this.navCtrl.navigateForward('/pay-opt');
        break;
      case 8: 
        this.showPasswordResetDlg();
        break;
      case 11:
        this.showLogoutAlert();
        break;
      default:
        break;
    }
  }

  async showLogoutAlert() {
    const logoutAlt = await this.altCtrl.create({
      header: "Log Out?",
      subHeader: "",
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
            localStorage.removeItem("isLoggedIn");
            this.event.publish("onLoginStatusChange");
            this.initPage();
          }
        }
      ]
    });

    await logoutAlt.present();
  }

  /**
   * Show Password Reset Dialog
   */
  async showPasswordResetDlg() {
    const resetDlg = await this.altCtrl.create({
      header: "Reset Password",
      subHeader: "",
      inputs: [
        {
          name: 'value',
          type: 'password',
          placeholder: 'Current password'
        },
        {
          name: 'value1',
          type: 'password',
          placeholder: 'New password'
        },
        {
          name: 'value2',
          type: 'password',
          placeholder: 'Confirm New password'
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
            if(data.value1 !== data.value2) {
              this.toastService.showToast("New password doesn't match!");
            } else {
              this.resetPassword(data.value, data.value1);
            }
          }
        }
      ]
    });

    await resetDlg.present();
  }

  /**
   * Reset Password
   * @param oldPwd: String, newPwd: String
   * @returns null
   */
  resetPassword(oldPwd, newPwd) {
    console.log("Old New", oldPwd, newPwd);
  }

}
