import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, Platform } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { saveAs } from 'file-saver';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { SERVERASSETS, STATUS } from '../../constants';

@Component({
  selector: 'app-admin-requests',
  templateUrl: './admin-requests.page.html',
  styleUrls: ['./admin-requests.page.scss'],
})
export class AdminRequestsPage implements OnInit {

  private arrRequests = [];
  private arrStatus = STATUS;

  constructor(
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private apiService: ApiService,
    private platform: Platform,
    private file: File,
    private transfer: FileTransfer
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.initPage();
  }

  async initPage() {
    const requestLoader = await this.loadingCtrl.create({
      message: "Loading..."
    });
    await requestLoader.present();

    this.arrRequests = [];
    this.apiService.getAllRequests()
      .subscribe((res: any) => {
        if(res.data) {
          for(let i = 0; i < res.data.length; i++) {
            if(res.data[i].status == 0) {
              this.arrRequests.push({...res.data[i], expanded: false});
            }
          }
        }
        requestLoader.dismiss();
        console.log(this.arrRequests);
      }, error => {
        console.log(error);
        requestLoader.dismiss();
      })
  }

  onToggleViewAttachment(i) {
    this.arrRequests[i].expanded = !this.arrRequests[i].expanded;
  }

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
   * Assign to expert
   * @param request Request Object
   */
  onClickSentToRequestor(request) {
    if(request.status == 2) {
      alert("This Request is already closed!");
      return;
    }
    console.log(request);
  }

  /**
   * Request is ignored
   * @param request Request Object
   */
  onClickBackToReviewer(request) {
    if(request.status == 2) {
      alert("This Request is already closed!");
      return;
    }
    console.log(request);
  }

  /**
   * Abort Request
   * @param request 
   */
  onClickAbort(request) {
    if(request.status == 2) {
      alert("This Request is already closed!");
      return;
    }
    console.log(request);
  }

  onClickAllCases() {
    this.navCtrl.navigateForward('/menu/adminallcases');
  }

  onClickNavBack() {
    this.navCtrl.navigateBack('/menu/landing');
  }

}
