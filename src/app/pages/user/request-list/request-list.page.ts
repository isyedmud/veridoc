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
            if(res.data[i].status !== 0) {
              this.arrMyRequests.push({...res.data[i], expanded: false, expandattachment: false});
            }
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

  onToggleViewAttachment(evt, i) {
    evt.stopPropagation();
    this.arrMyRequests[i].expandattachment = !this.arrMyRequests[i].expandattachment;
  }

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
   * 
   * @param evt Click event
   * @param actionId 
   *  0: complete the request: go to new request page and complete the step
   *  1: take action: provide input
   *  2: need clarification
   *  3: close request: close request completely
   *  4: not satisfied: close the request and provide the bad review
   *  5: reopen: status to "in progress"
   * @param arrRequestIndex arrMyRequests Index
   */
  onClickRequestAction(evt, actionId, arrRequestIndex) {
    evt.stopPropagation();
    switch(actionId) {
      case 0: 
        this.navCtrl.navigateForward('/menu/expertsreview/' + this.arrMyRequests[arrRequestIndex]._id);
        break;
      case 1:
        this.showProvideInput(arrRequestIndex);
        break;
      case 2:
        this.apiService.updateRequestStatus(this.arrMyRequests[arrRequestIndex], 1)
          .subscribe(() => {
            this.toastService.showToast("The Request is in progress");
          }, error => {
            console.log(error);
            this.toastService.showToast("Operation failed!");
          });
        break;
      case 3:
        this.showFeedbackModal(arrRequestIndex);
        break;
      case 4:
        this.showFeedbackModal(arrRequestIndex);
        break;
      case 5:
        this.apiService.updateRequestStatus(this.arrMyRequests[arrRequestIndex]._id, 1)
          .subscribe(() => {
            this.toastService.showToast("The Request is re-opened");
          }, error => {
            console.log(error);
            this.toastService.showToast("Operation failed!");
          });
        break;
      default:
        break;
    }
  }

  async showProvideInput(index) {
    const inputModal = await this.modalCtrl.create({
      component: ExpertCommentPage,
      cssClass: "info-modal",
      componentProps: {
        title: "Provide Input",
        placeholder: "Please input your comment"
      }
    });
    await inputModal.present();
    const strExtra = await inputModal.onDidDismiss();

    if(!strExtra.data) {
      alert("Empty Field!");
      return;
    }

    const inputLoader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    await inputLoader.present();

    this.apiService.provideInput(this.arrMyRequests[index], strExtra.data)
      .subscribe(() => {
        inputLoader.dismiss();
        this.toastService.showToast("Provided input successfully!");
        this.getRequests();
      }, error => {
        console.log(error);
        inputLoader.dismiss();
        this.toastService.showToast("Operation failed!");
      });
  }

  /**
   * Show Feedbackmodal
   * @param arrIndex arrMyRequests array index
   */
  async showFeedbackModal(arrIndex) {
    console.log(this.arrMyRequests[arrIndex]);
    const feedbackModal = await this.modalCtrl.create({
      component: FeedbackPage,
      cssClass: "info-modal",
      componentProps: {
        expertId: this.arrMyRequests[arrIndex].expert,
        requestId: this.arrMyRequests[arrIndex]._id
      },
      backdropDismiss: false
    });
    await feedbackModal.present();
    feedbackModal.onDidDismiss()
      .then((data) => {
        if(data.data == 0) {
          this.toastService.showToast("Successfully placed your feedback!");
          this.getRequests();
        } else {
          this.toastService.showToast("Operation failed!");
        }
      })
  }

  /**
   * Back to landing page
   */
  onClickNavBack() {
    this.navCtrl.navigateBack('/menu/landing');
  }
}
