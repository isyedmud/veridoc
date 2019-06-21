import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, Platform } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { saveAs } from 'file-saver';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { SERVERASSETS } from '../../constants';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {

  private arrRequests = [];


  constructor(
    private navCtrl: NavController,
    private apiService: ApiService,
    private loadingCtrl: LoadingController,
    private platform: Platform,
    private file: File,
    private transfer: FileTransfer
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.initPage();
  }

  /**
   * Init Page when it's loaded
   */
  async initPage() {
    const requestLoader = await this.loadingCtrl.create({
      message: "Loading..."
    });
    await requestLoader.present();

    try {
      this.apiService.getAllRequests()
        .subscribe((res: any) => {
          this.arrRequests = [];
          if(res.data) {
            for(let i = 0; i < res.data.length; i++) {
              if(res.data[i].status == 0) {
                this.arrRequests.push({...res.data[i], expanded: false});
              }
            }
          }
          requestLoader.dismiss();
        })
    } catch(err) {
      console.log(err);
      requestLoader.dismiss();
    }
  }

  /**
   * Toggle to view attachments
   * @param i array index of arrRequests
   */
  onToggleViewAttachment(i) {
    this.arrRequests[i].expanded = !this.arrRequests[i].expanded;
  }

  /**
   * Download attachment file
   * Check platform, so if platform is mobile, then, use cordova plugin
   * if platform is not mobile, then, use file-saver.js
   * @param filename the name of file to download
   */
  async onClickAttachments(filename) {
    let isMobile = this.platform.is("mobile");
    if(isMobile) {
      const fileTransfer: FileTransferObject = this.transfer.create();
      try {
        await fileTransfer.download(SERVERASSETS + filename, this.file.externalRootDirectory + 'Download/' + filename);
      } catch(err) {
        console.log(err);
      }
    } else {
      this.apiService.downloadFile(filename)
      .subscribe((data) => {
        console.log(data);
        saveAs(data, filename);
      }, error => {
        console.log(error);
      })
    }
  }

  /**
   * Assign request to expert
   * @param index the index of arrRequests array
   */
  async onClickReview(index) {
    const data = {
      expertId: localStorage.getItem("uid"),
      requestId: this.arrRequests[index]._id
    };

    const setLoader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    await setLoader.present();
    
    try {
      this.apiService.requestSetExpert(data)
        .subscribe((data) => {
          setLoader.dismiss();
          this.initPage();
        });
    } catch(err) {
      console.log(err);
      setLoader.dismiss();
    }
  }

  /**
   * navigate to view document page
   * @param index request array index
   */
  onClickViewDocs(index) {

  }

  /**
   * Navigate to Revied Case page
   */
  onClickReviewedCases() {
    this.navCtrl.navigateForward('/reviewed-cases');
  }

  /**
   * Navigate to landing page
   */
  onClickNavBack() {
    this.navCtrl.navigateBack('/menu/landing');
  }

}
