import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../../constants';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-assign-category',
  templateUrl: './assign-category.page.html',
  styleUrls: ['./assign-category.page.scss'],
})
export class AssignCategoryPage implements OnInit {

  private arrCategories = CATEGORIES;
  private newCategory = 0;

  constructor(
    private modalCtrl: ModalController,
    private altCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.arrCategories = this.arrCategories.slice(0, -1);
    console.log(this.arrCategories);
  }

  onClickCancel() {
    this.modalCtrl.dismiss(null);
  }

  async onClickOk() {
    // this.modalCtrl.dismiss(this.newCategory);
    const confirmAlt = await this.altCtrl.create({
      header: 'Confirm!',
      message: `Category: ${this.arrCategories[this.newCategory]}`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Ok',
          handler: () => {
            this.acceptSelectedCategory();
          }
        }
      ]
    });

    await confirmAlt.present();
  }

  acceptSelectedCategory() {
    this.modalCtrl.dismiss(this.newCategory);
  }

}
