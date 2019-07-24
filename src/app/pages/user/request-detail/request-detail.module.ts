import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RequestDetailPage } from './request-detail.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ModalModule } from '../../modal/modal.module';

const routes: Routes = [
  {
    path: '',
    component: RequestDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalModule,
    PipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RequestDetailPage
  ]
})
export class RequestDetailPageModule {}
