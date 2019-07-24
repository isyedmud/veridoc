import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private androidPermissions: AndroidPermissions
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    try {
      await this.platform.ready();
      if(this.platform.is("android")) {
        let permResult = await this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE);
        if(!permResult.hasPermission) {
          await this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE);
        }
      }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      await this.getFirebaseToken();
    } catch(err) {
      console.log(err);
    }
  }

  async getFirebaseToken() {
    console.log("Called")
    let messaging = firebase.messaging();
    let token = await messaging.getToken();
    console.log("token", token);
  }
}
