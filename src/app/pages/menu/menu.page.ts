import { Component, OnInit } from '@angular/core';
import { NavController, Events, AlertController, LoadingController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast/toast.service';
import { ApiService } from 'src/app/services/api/api.service';

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

  /**
   * User Role
   * 0: User
   * 1: Expert
   * 2: Admin
   */
  private userRole: String;

  constructor(
    private navCtrl: NavController,
    private event: Events,
    private altCtrl: AlertController,
    private toastService: ToastService,
    private loadingCtrl: LoadingController,
    private apiService: ApiService
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.initPage();
  }

  initPage() {
    const isLoggedIn = localStorage.getItem("isLoggedIn")=='true'?true: false;
    this.userRole = localStorage.getItem("role");
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
      const commonMenu = [
        {
          id: 9,
          name: "Change Password"
        },
        {
          id: 11,
          name: "Log Out"
        },
      ];

      if(this.userRole == '0') {
        this.pages = [
          {
            id: 5,
            name: "New Request"
          },
          {
            id: 6,
            name: "My Requests"
          },
          {
            id: 7,
            name: "My profile"
          },
          {
            id: 8,
            name: "Payment Option"
          },
          {
            id: 10,
            name: "Delete Account"
          },
        ];
      } else if(this.userRole == '1') {
        this.pages = [
          {
            id: 6,
            name: "Requests"
          },
          {
            id: 7,
            name: "My profile"
          },
          {
            id: 8,
            name: "Bank Details"
          },
          {
            id: 10,
            name: "Delete Account"
          },
        ];
      } else if(this.userRole == '2') {
        this.pages = [
          {
            id: 5,
            name: "Users"
          },
          {
            id: 6,
            name: "Requests"
          },
          {
            id: 7,
            name: "My profile"
          },
        ]
      }
      this.pages = this.pages.concat(commonMenu);
      this.pages.sort((a, b) => a.id - b.id);
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
        if(this.userRole == '0') {
          this.navCtrl.navigateForward('/menu/expertsreview/null');
        } else {
          this.navCtrl.navigateForward('/menu/admin-users');
        }
        break;
      case 6: 
        if(this.userRole == '0') {
          this.navCtrl.navigateForward('/menu/myrequests');
        } else if(this.userRole == '1') {
          this.navCtrl.navigateForward('/menu/expert-requests');
        } else {
          this.navCtrl.navigateForward('/menu/admin-requests');
        }
        break;
      case 7:
        this.navCtrl.navigateForward('/profile');
        break;
      case 8:
        this.navCtrl.navigateForward('/pay-opt');
        break;
      case 9: 
        this.showPasswordResetDlg();
        break;
      case 10:
        this.showDeleteAccountAlert();
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

  async showDeleteAccountAlert() {
    const deleteAlt = await this.altCtrl.create({
      header: "You want to delete the account?",
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
          handler: () => {
            this.deleteAccount();
          }
        }
      ]
    });

    await deleteAlt.present();
  }

  async deleteAccount() {
    const deleteLoader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    await deleteLoader.present();

    const uid = localStorage.getItem("uid");
    const role = localStorage.getItem("role");
    this.apiService.deleteAccount(uid, role)
      .subscribe((res: any) => {
        this.toastService.showToast("Account is Deleted!");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("uid");
        this.initPage();
        this.event.publish("onLoginStatusChange");
        deleteLoader.dismiss();
        this.navCtrl.navigateBack('/menu/landing');
      }, error => {
        console.log(error);
        deleteLoader.dismiss();
      })
  }

}
