import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { MultiFileUploadComponent } from 'src/app/components/multi-file-upload/multi-file-upload.component';
import { ApiService } from 'src/app/services/api/api.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-provide-input',
  templateUrl: './provide-input.page.html',
  styleUrls: ['./provide-input.page.scss'],
})
export class ProvideInputPage implements OnInit {
  @ViewChild(MultiFileUploadComponent) fileField: MultiFileUploadComponent;
  @Input('reqId') reqId;
  private uploadedFiles = [];
  private strMessage = "";

  constructor(
    private modalCtrl: ModalController,
    private apiService: ApiService,
    private loadingCtrl: LoadingController,
    private toastService: ToastService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log(this.reqId);
  }

  async onClickSend() {
    const provideInputLoader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    await provideInputLoader.present();
    this.uploadedFiles = [];

    let files = this.fileField.getFiles();
    if(files.length > 0) {
      let formData = new FormData();
      files.forEach((file) => {
        formData.append('attachments', file.rawFile, file.name);
      });
      let uploadResult = await this.apiService.uploadFiles(formData);
      Object.keys(uploadResult).map(key => {
        this.uploadedFiles.push(uploadResult[key]._id);
      });
    }

    const reqData = {
      reqId: this.reqId,
      extra: {
        uid: localStorage.getItem("uid"),
        name: "",
        role: localStorage.getItem("role"),
        files: this.uploadedFiles,
        message: this.strMessage,
        trackRequestId: ""
      }
    };
    try {
      let trackRequest: any = await this.apiService.saveRequestStatus(2).toPromise();
      reqData.extra.trackRequestId = trackRequest.data._id;
      await this.apiService.provideInput(reqData).toPromise();
      provideInputLoader.dismiss();
      this.toastService.showToast("Operation is successfull!");
      this.modalCtrl.dismiss();
    } catch(error) {
      console.log(error);
      provideInputLoader.dismiss();
      this.toastService.showToast("Operation failed!");
    }
    this.modalCtrl.dismiss();
  }

  onClickCancel() {
    this.modalCtrl.dismiss();
  }

}
