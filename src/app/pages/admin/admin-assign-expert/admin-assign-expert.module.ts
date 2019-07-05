import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminAssignExpertPage } from './admin-assign-expert.page';

const routes: Routes = [
  {
    path: '',
    component: AdminAssignExpertPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminAssignExpertPage]
})
export class AdminAssignExpertPageModule {}
