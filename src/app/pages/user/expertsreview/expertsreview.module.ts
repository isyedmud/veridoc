import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExpertsreviewPage } from './expertsreview.page';
import { MultiFileUploadComponent } from 'src/app/components/multi-file-upload/multi-file-upload.component';
import { FileUploadModule } from 'ng2-file-upload';


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
    IonicModule,
    FileUploadModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ExpertsreviewPage,
    MultiFileUploadComponent
  ]
})
export class ExpertsreviewPageModule {}
