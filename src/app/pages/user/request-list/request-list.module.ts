import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RequestListPage } from './request-list.page';
import { ModalModule } from '../../modal/modal.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: RequestListPage
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
    RequestListPage, 
  ]
})
export class RequestListPageModule {}
