import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ContactusPage } from './contactus/contactus.page';

@NgModule({
  declarations: [
    ContactusPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    ContactusPage
  ],
  entryComponents: [
    ContactusPage
  ]
})
export class ModalModule { }
