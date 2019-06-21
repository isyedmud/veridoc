import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, Platform } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { saveAs } from 'file-saver';
import { SERVERASSETS, STATUS } from '../../constants';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-reviewed-cases',
  templateUrl: './reviewed-cases.page.html',
  styleUrls: ['./reviewed-cases.page.scss'],
})
export class ReviewedCasesPage implements OnInit {

  private arrRequests = [];
  private arrStatus = STATUS;
  private strKeyword = "";
  private arrFilterRequests = [];

  constructor(
    private navCtrl: NavController,
    private apiService: ApiService,
    private loadingCtrl: LoadingController,
    private platform: Platform,
    private file: File,
    private transfer: FileTransfer,
    private toastService: ToastService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.initPage();
  }

  async initPage() {
    this.arrRequests = [];
    const requestLoader = await this.loadingCtrl.create({
      message: "Loading..."
    });
    await requestLoader.present();

    try {
      const uid = localStorage.getItem("uid");
      this.apiService.getAllRequests(uid)
        .subscribe((res: any) => {
          if(res.data) {
            for(let i = 0; i < res.data.length; i++) {
              this.arrRequests.push({...res.data[i], expanded: false});
            }
          }
          requestLoader.dismiss();
          this.arrFilterRequests = this.arrRequests;
          console.log(this.arrFilterRequests);
        });
    } catch(err) {
      console.log(err);
      requestLoader.dismiss();
    }
  }

  onChangeSearchInput() {
    if(this.strKeyword !== "") {
      this.arrFilterRequests = this.arrRequests.filter(x => x.queries.toLowerCase().includes(this.strKeyword) || x.comments.toLowerCase().includes(this.strKeyword));
    } else {
      this.arrFilterRequests = this.arrRequests;
    }
  }

  onToggleViewAttachment(index) {
    this.arrRequests[index].expanded = !this.arrRequests[index].expanded;
  }

  async onClickAttachments(filename) {
    const downloadLoader = await this.loadingCtrl.create({
      message: "Downloading..."
    });
    await downloadLoader.present();
    let isMobile = this.platform.is("mobile");
    if(isMobile) {
      const fileTransfer: FileTransferObject = this.transfer.create();
      try {
        await fileTransfer.download(SERVERASSETS + filename, this.file.externalRootDirectory + 'Download/' + filename);
        downloadLoader.dismiss();
        this.toastService.showToast(filename + " is downloaded successfully!");
      } catch(err) {
        console.log(err);
        downloadLoader.dismiss();
        this.toastService.showToast(filename + " download is faled!");
      }
    } else {
      this.apiService.downloadFile(filename)
      .subscribe((data) => {
        saveAs(data, filename);
        downloadLoader.dismiss();
        this.toastService.showToast(filename + " is downloaded successfully!");
      }, error => {
        console.log(error);
        downloadLoader.dismiss();
        this.toastService.showToast(filename + " download is faled!");
      })
    }
  }

  /**
   * Set paymentStatus = 1
   * The expert received payment
   * @param i arrrequests index
   */
  async onClickReceivePayment(i) {
    const paymentReceiveLoader = await this.loadingCtrl.create({
      message: "Processing..."
    });
    await paymentReceiveLoader.present();
    this.apiService.processPayment(this.arrRequests[i]._id)
      .subscribe((data) => {
        paymentReceiveLoader.dismiss();
        this.toastService.showToast("Payment for this request is processed!");
        this.arrRequests[i].paymentStatus = 1;
      }, error => {
        console.log(error);
        paymentReceiveLoader.dismiss();
        this.toastService.showToast("Payment for this request is failed!");
      });
  }

  onClickNavBack() {
    this.navCtrl.navigateBack('/menu/expert-requests');
  }

}
