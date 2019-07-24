import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExpertsreviewPage } from './expertsreview.page';
import { ModalModule } from '../../modal/modal.module';

const routes: Routes = [
  {
    path: '',
    component: ExpertsreviewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModalModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ExpertsreviewPage,
  ]
})
export class ExpertsreviewPageModule {}
