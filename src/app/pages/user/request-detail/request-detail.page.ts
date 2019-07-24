import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, AlertController, Platform, ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { STATUS, CATEGORIES, SERVERASSETS } from '../../constants';
import { ToastService } from 'src/app/services/toast/toast.service';
import { ExpertCommentPage } from '../../modal/expert-comment/expert-comment.page';
import { saveAs } from 'file-saver';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FeedbackPage } from '../../modal/feedback/feedback.page';
import { ProvideInputPage } from '../../modal/provide-input/provide-input.page';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.page.html',
  styleUrls: ['./request-detail.page.scss'],
})
export class RequestDetailPage implements OnInit {

  private selectedView = 0;
  private requestId = "";
  private objRequestDetail = null;
  private arrStatus = STATUS;
  private arrCategories = CATEGORIES;
  private isViewAttachment = false;
  private isMobile = false;

  /**
   * usertype
   * 0: normal user
   * 1: expert
   * 2: admin
   */
  private userType: string;

  constructor(
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private apiService: ApiService,
    private navCtrl: NavController,
    private altCtrl: AlertController,
    private platform: Platform,
    private modalCtrl: ModalController,
    private toastService: ToastService,
    private file: File,
    private transfer: FileTransfer
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.initPage();
  }

  initPage() {
    this.isMobile = this.platform.is("mobile");
    this.requestId = this.route.snapshot.paramMap.get("reqId");
    this.userType = this.route.snapshot.paramMap.get("userType");
    console.log("Role", this.userType);
    this.getRequestDetail();
  }

  async getRequestDetail() {
    const detailLoader = await this.loadingCtrl.create({
      message: "Loading..."
    });

    detailLoader.present();

    try {
      const detailRequest: any = await this.apiService.getRequestById(this.requestId).toPromise();
      this.objRequestDetail = { ...detailRequest.data, isExpandedProvideInput: false, isViewTimeLine: false };
      console.log("detail", this.objRequestDetail);
      detailLoader.dismiss();
    } catch (error) {
      console.log(error);
      detailLoader.dismiss();
    }
  }

  onClickViewType(type) {
    this.selectedView = type;
  }

  onClickViewAttachment(evt) {
    evt.stopPropagation();
    this.isViewAttachment = !this.isViewAttachment;
  }

  /**
   * Process user action
   * @param action actionid
   * 0: Take action
   * 1: need clarification
   * 2: close request
   * 3: not satisified
   * 4: Re open
   */
  async showConfirmMessage(evt, action) {
    evt.stopPropagation();
    let message = "";

    if (action == 0) {
      message = "provide input to"
    } else if (action == 1) {
      message = "clarificate";
    } else if (action == 2) {
      message = "close";
    } else if (action == 3) {
      message = "close";
    } else if (action == 4) {
      message = "re open";
    }

    const alert = await this.altCtrl.create({
      header: 'Confirm!',
      message: `Are you sure want to ${message} the request?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Okay',
          handler: () => {
            if(action == 0) {
              this.provideInput();
            } else if(action == 1) {
              this.needClarification();
            } else if(action == 2) {
              this.showFeedbackModal();
            } else if(action == 3) {
              this.showFeedbackModal();
            } else if(action == 4) {
              this.reopenRequest();
            }
          }
        }
      ]
    });
    await alert.present();
  }

  /**
   * Provide Input for selected Request
   */
  async provideInput() {
    const provideInputModal = await this.modalCtrl.create({
      component: ProvideInputPage,
      componentProps: {
        reqId: this.requestId
      }
    });
    await provideInputModal.present();
  }

  /**
   * Need Clarification
   * Set request status to "In Progress"
   */
  async needClarification() {
    try {
      let trackRequestResult: any = await this.apiService.saveRequestStatus(1).toPromise();
      await this.apiService.updateRequestStatus(this.requestId, 1, trackRequestResult.data._id).toPromise();
      this.toastService.showToast("The Request is in progress");
    } catch(error) {
      console.log(error);
      this.toastService.showToast("Operation failed!");
    }
  }

  async showFeedbackModal() {
    console.log(this.objRequestDetail);
    const feedbackModal = await this.modalCtrl.create({
      component: FeedbackPage,
      cssClass: "info-modal",
      componentProps: {
        expertId: this.objRequestDetail.expert,
        requestId: this.requestId
      },
      backdropDismiss: false
    });
    await feedbackModal.present();
    feedbackModal.onDidDismiss()
      .then((data) => {
        if(data.data == 0) {
          this.toastService.showToast("Successfully placed your feedback!");
          this.getRequestDetail();
        } else {
          this.toastService.showToast("Operation failed!");
        }
      })
  }

  async reopenRequest() {
    try {
      let trackRequestResult: any = await this.apiService.saveRequestStatus(1).toPromise();
      await this.apiService.updateRequestStatus(this.requestId, 1, trackRequestResult.data._id).toPromise();
      this.toastService.showToast("The Request is re-opened");
    } catch(error) {
      console.log(error);
      this.toastService.showToast("Operation failed!");
    }
  }

  /**
   * Expert Part
   * onAcceptRequest
   * onClickProvideInputFromExpert
   * onClickFinalOpinion
   */
  async onAcceptRequest(evt) {
    evt.stopPropagation();

    const assignLoader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    await assignLoader.present();
    const objAssign = {
      requestId: this.requestId, 
      expertId: localStorage.getItem("uid")
    };
    this.apiService.requestSetExpert(objAssign)
      .subscribe(() => {
        this.objRequestDetail.expert = localStorage.getItem("uid");
        console.log(this.objRequestDetail);
        assignLoader.dismiss();
        this.toastService.showToast("Request is accepted!");
      }, error => {
        console.log(error);
        assignLoader.dismiss();
        this.toastService.showToast("Operation failed!");
      })
  }

  async onClickProvideInputFromExpert(evt) {
    evt.stopPropagation();
    const provideInputModal = await this.modalCtrl.create({
      component: ProvideInputPage,
      componentProps: {
        reqId: this.requestId
      }
    });
    await provideInputModal.present();
  }

  async onClickFinalOpinion(evt) {
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
        this.provideExpertComment(expertReview.data);
      }
    } catch(err) {
      console.log(err);
    }
  }

  async provideExpertComment(str) {
    const commentLoader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    await commentLoader.present();
    let objComment: any = {
      expertsId: localStorage.getItem("uid"),
      userId: this.objRequestDetail.user._id,
      requestId: this.requestId,
      comment: str,
      trackReqId: ""
    };

    try {
      let trackRequestResult: any = await this.apiService.saveRequestStatus(3).toPromise();
      objComment.trackReqId = trackRequestResult.data._id;
      await this.apiService.provideExpertComment(objComment).toPromise();
      commentLoader.dismiss();
      this.toastService.showToast("Successful!");
    } catch(error) {
      console.log(error);
      commentLoader.dismiss();
      this.toastService.showToast("Operation Failed!");
    }
  }

  onClickNavBack() {
    if(this.userType == "0") {
      this.navCtrl.navigateBack('/menu/myrequests');
    } else if(this.userType == "1") {
      this.navCtrl.navigateBack('/menu/expert-requests');
    }
  }

  async onClickAttachmentFile(evt, filename) {
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

  onClickViewExtraComments(evt) {
    evt.stopPropagation();
    this.objRequestDetail.isExpandedProvideInput = !this.objRequestDetail.isExpandedProvideInput;
  }

  onClickViewTimeLine(evt) {
    evt.stopPropagation();
    this.objRequestDetail.isViewTimeLine = !this.objRequestDetail.isViewTimeLine;
  }

}
