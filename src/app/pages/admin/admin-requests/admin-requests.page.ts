import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, Platform } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { saveAs } from 'file-saver';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { SERVERASSETS, STATUS, CATEGORIES } from '../../constants';

@Component({
  selector: 'app-admin-requests',
  templateUrl: './admin-requests.page.html',
  styleUrls: ['./admin-requests.page.scss'],
})
export class AdminRequestsPage implements OnInit {

  /**
   * Requests array
   */
  private arrRequests = [];

  /**
   * Status array
   */
  private arrStatus = STATUS;

  /**
   * Category array
   */
  private arrCategories = CATEGORIES;

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
              this.arrRequests.push({...res.data[i], expanded: false, expandattachment: false});
            }
          }
          this.arrRequests = res.data;
        }
        requestLoader.dismiss();
        console.log(this.arrRequests);
      }, error => {
        console.log(error);
        requestLoader.dismiss();
      })
  }

  /**
   * View Details of request
   * @param index arrRequests index
   */
  onClickRequest(index) {
    this.arrRequests[index].expanded = !this.arrRequests[index].expanded;
  }

  /**
   * Toggle attachments
   * @param evt Click Event
   * @param i arrRequests index
   */
  onToggleViewAttachment(evt, i) {
    evt.stopPropagation();
    this.arrRequests[i].expandattachment = !this.arrRequests[i].expandattachment;
  }

  /**
   * Check platform
   *  if mobile: use file transfer plugin
   *  else directly download
   * @param evt Click Event
   * @param filename Filename to download
   */
  async onClickAttachments(evt, filename) {
    evt.stopPropagation();
    let isMobile = this.platform.is("mobile");
    console.log(isMobile);
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
   * If the category of request is "I don't know", admin can select request.
   * @param objRequest Assign request to expert
   */
  onClickAssignRequest(evt, objRequest) {
    evt.stopPropagation();
    this.navCtrl.navigateForward('/admin-assign-expert/' + objRequest._id);
  }

  /**
   * Navigate to landing page
   */
  onClickNavBack() {
    this.navCtrl.navigateBack('/menu/landing');
  }

}
