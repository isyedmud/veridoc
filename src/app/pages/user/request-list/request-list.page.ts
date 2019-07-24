import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { LoadingController, NavController, PopoverController, ModalController, Platform } from '@ionic/angular';
import { STATUS, CATEGORIES, SERVERASSETS } from '../../constants';
import { ToastService } from 'src/app/services/toast/toast.service';
import { FilterPage } from '../../popover/filter/filter.page';
import { FeedbackPage } from '../../modal/feedback/feedback.page';
import { saveAs } from 'file-saver';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { ExpertCommentPage } from '../../modal/expert-comment/expert-comment.page';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.page.html',
  styleUrls: ['./request-list.page.scss'],
})
export class RequestListPage implements OnInit {

  private isMobile = false;
  private arrAllRequests = [];
  private arrMyRequests = [];
  private arrStatus = STATUS;
  private arrCategories = CATEGORIES;
  private selectedView = 0;
  private gridcount = 12;
  private arrFilterOpts = [
    "Category",
    "Date",
    "Status",
    "Including Draft",
  ];
  private filter = null;

  constructor(
    private apiService: ApiService,
    private loadingCtrl: LoadingController,
    private toastService: ToastService,
    private navCtrl: NavController,
    private popOver: PopoverController,
    private modalCtrl: ModalController,
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
   * Init Variables
   */
  initPage() {
    this.isMobile = this.platform.is("mobile");
    this.getRequests();
  }

  /**
   * Get My Requests
   * @returns array of request
   */
  async getRequests() {
    this.arrMyRequests = [];
    this.arrAllRequests = [];
    const uid = localStorage.getItem("uid");
    const dataLoader = await this.loadingCtrl.create({
      message: "Loading..."
    });
    await dataLoader.present();
    this.apiService.getRequest(uid)
      .subscribe((res: any) => {
        this.arrMyRequests = [];
        if(res.data) {
          console.log(res.data);
          this.arrAllRequests = res.data;
          for(let i = 0; i < res.data.length; i++) {
            this.arrMyRequests.push({...res.data[i], expanded: false, expandattachment: false});
          }
        }
        dataLoader.dismiss();
        console.log("Result", this.arrMyRequests);
      }, error => {
        console.log(error);
        dataLoader.dismiss();
      });
  }

  /**
   * Change viewtype
   * @param viewtype number
   * 0: listview
   * 1: gridview
   */
  onClickViewType(viewtype) {
    this.selectedView = viewtype;
    if(this.selectedView == 0) {
      this.gridcount = 12;
    } else {
      this.gridcount = 6;
    }
  }

  async onClickFilterBtn() {
    const filterPopover = await this.popOver.create({
      component: FilterPage,
      event,
      componentProps: {'filterOpts': this.arrFilterOpts}
    });
    await filterPopover.present();
    filterPopover.onDidDismiss()
      .then((data: any) => {
        this.filter = data.data;
        if(this.filter) {
          this.filterRequests();
        }
      });
  }

  showHideDrafts(option) {
    if(option) {
      this.arrMyRequests = this.arrAllRequests;
    } else {
      for(let i = 0; i < this.arrAllRequests.length; i++) {
        if(this.arrAllRequests[i].status !== 0) {
          this.arrMyRequests.push(this.arrAllRequests[i]);
        }
      }
    }
  }

  filterRequests() {
    this.arrMyRequests = [];
    if(this.filter == 0) {
      this.showHideDrafts(false);
      this.arrMyRequests.sort((a, b) => a.category - b.category);
    } else if(this.filter == 1) {
      this.showHideDrafts(false);
      this.arrMyRequests.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if(this.filter == 2) {
      this.showHideDrafts(false);
      this.arrMyRequests.sort((a, b) => a.status - b.status);
    } else {
      this.showHideDrafts(true);
    }
  }

  /**
   * navigate to new request page
   */
  onClickNewRequest() {
    this.navCtrl.navigateForward('/menu/expertsreview/null');
  }

  onClickRequest(index) {
    this.arrMyRequests[index].expanded = !this.arrMyRequests[index].expanded;
  }

  /**
   * View request Detail
   * @param reqId Request Id
   */
  onClickViewDetailRequest(reqId) {
    this.navCtrl.navigateForward('/request-detail/' + reqId + "/0");
  }

  onClickCompleteRequest() {
    this.navCtrl.navigateForward('/menu/expertsreview/null');
  }

  /**
   * Back to landing page
   */
  onClickNavBack() {
    this.navCtrl.navigateBack('/menu/landing');
  }
}
