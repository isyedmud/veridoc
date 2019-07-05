import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RequestPage } from './request.page';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ModalModule } from '../../modal/modal.module';

const routes: Routes = [
  {
    path: '',
    component: RequestPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ModalModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RequestPage,
  ]
})
export class RequestPageModule {}
