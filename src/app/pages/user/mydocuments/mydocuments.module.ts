import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../../../pipes/pipes.module';

import { MydocumentsPage } from './mydocuments.page';

const routes: Routes = [
  {
    path: '',
    component: MydocumentsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MydocumentsPage]
})
export class MydocumentsPageModule {}
