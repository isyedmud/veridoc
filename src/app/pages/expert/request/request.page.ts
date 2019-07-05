import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, Platform, PopoverController, ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { saveAs } from 'file-saver';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { SERVERASSETS, CATEGORIES, STATUS } from '../../constants';
import { FilterPage } from '../../popover/filter/filter.page';
import { ToastService } from 'src/app/services/toast/toast.service';
import { ExpertCommentPage } from '../../modal/expert-comment/expert-comment.page';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {

  private uid = "";
  private arrRequests = [];
  private arrFilterOpts = [
    "Category",
    "Date",
    "Requestor First Name",
    "Requestor Last Name"
  ];
  private arrCategories = CATEGORIES;
  private arrStatus = STATUS;

  constructor(
    private navCtrl: NavController,
    private apiService: ApiService,
    private loadingCtrl: LoadingController,
    private platform: Platform,
    private file: File,
    private transfer: FileTransfer,
    private popOver: PopoverController,
    private toastService: ToastService,
    private modalCtrl: ModalController
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

    this.uid = localStorage.getItem("uid");

    try {
      this.apiService.getAllRequests()
        .subscribe((res: any) => {
          this.arrRequests = [];
          if(res.data) {
            console.log(res.data);
            for(let i = 0; i < res.data.length; i++) {
              if(res.data[i].status == 1 && (res.data[i].expert == this.uid || !res.data[i].expert)) {
                this.arrRequests.push({...res.data[i], expanded: false, expandattachment: false});
              }
            }
          }
          console.log(this.arrRequests);
          requestLoader.dismiss();
        })
    } catch(err) {
      console.log(err);
      requestLoader.dismiss();
    }
  }

  /**
   * Show Filter Popover
   */
  async onClickFilter() {
    const filterPopover = await this.popOver.create({
      component: FilterPage,
      componentProps: {
        "filterOpts": this.arrFilterOpts
      },
      event
    });
    await filterPopover.present();
    filterPopover.onDidDismiss()
      .then((data: any) => {
        // console.log(data);
        this.filterRequests(data.data);
      });
  }

  /**
   * Assign Request to currrent Expert
   * @param index array arrRequests index
   */
  async onClickAssignRequest(evt, index) {
    evt.stopPropagation();
    const assignLoader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    await assignLoader.present();
    const objAssign = {
      requestId: this.arrRequests[index]._id, 
      expertId: localStorage.getItem("uid")
    };
    this.apiService.requestSetExpert(objAssign)
      .subscribe(() => {
        this.arrRequests[index].expert = this.uid;
        assignLoader.dismiss();
        this.toastService.showToast("Request is accepted!");
      }, error => {
        console.log(error);
        assignLoader.dismiss();
        this.toastService.showToast("Operation failed!");
      })
  }

  /**
   * Filter Requests by selected option
   * @param filterOpt Filter option as array Index
   */
  filterRequests(filterOpt) {
    if(filterOpt == 0) {
      this.arrRequests.sort((a, b) => a.category - b.category);
    } else if(filterOpt == 1) {
      this.arrRequests.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if(filterOpt == 2) {
      this.arrRequests.sort((a, b) => a.user.fname - b.user.fname);
    } else {
      this.arrRequests.sort((a, b) => a.user.lname - b.user.lname);
    }
  }

  onClickRequest(index) {
    this.arrRequests[index].expanded = !this.arrRequests[index].expanded;
  }

  /**
   * Toggle to view attachments
   * @param i array index of arrRequests
   */
  onToggleViewAttachment(evt, i) {
    evt.stopPropagation();
    this.arrRequests[i].expandattachment = !this.arrRequests[i].expandattachment;
  }

  /**
   * Download attachment file
   * Check platform, so if platform is mobile, then, use cordova plugin
   * if platform is not mobile, then, use file-saver.js
   * @param filename the name of file to download
   */
  async onClickAttachments(evt, filename) {
    evt.stopPropagation();
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
   * Set request's status as "Provide Input"
   * @param index arrRequestIndex: Number
   */
  async onClickProvideInput(evt, index) {
    evt.stopPropagation();
    const updateStatusLoader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    await updateStatusLoader.present();
    this.apiService.updateRequestStatus(this.arrRequests[index]._id, 2)
      .subscribe(() => {
        updateStatusLoader.dismiss();
        this.toastService.showToast("Success!");
      }, error => {
        console.log(error);
        updateStatusLoader.dismiss();
        this.toastService.showToast("Operation Failed!");
      });
  }

  /**
   * Show Modal to input expert comments
   * @param index arrRequestIndex: Number
   */
  async onClickFinalOpinion(evt, index) {
    evt.stopPropagation();
    const commentModal = await this.modalCtrl.create({
      component: ExpertCommentPage,
      cssClass: "info-modal",
      componentProps: {
        title: "Comment",
        placeholder: 'Please input your feedback for the request'
      },
      backdropDismiss: false
    });
    await commentModal.present();
    try {
      const expertReview = await commentModal.onDidDismiss();
      if(expertReview.data !== null) {
        this.provideExpertComment(index, expertReview.data);
      }
    } catch(err) {
      console.log(err);
    }
  }

  /**
   * Provide expert's comment to request and set request's status as "Completed"
   * @param index arrRequestIndex: Number
   * @param str expert's comment: String
   */
  async provideExpertComment(index, str) {
    const commentLoader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    await commentLoader.present();
    const objComment = {
      expertsId: this.arrRequests[index].expert,
      userId: this.arrRequests[index].user._id,
      requestId: this.arrRequests[index]._id,
      comment: str
    };
    this.apiService.provideExpertComment(objComment)
      .subscribe(() => {
        commentLoader.dismiss();
        this.toastService.showToast("Successful!");
      }, error => {
        console.log(error);
        commentLoader.dismiss();
        this.toastService.showToast("Operation Failed!");
      })
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
