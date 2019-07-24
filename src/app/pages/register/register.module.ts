import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegisterPage } from './register.page';
import { UsertypePage } from '../popover/usertype/usertype.page';
import { NgCalendarModule } from 'ionic2-calendar';
 
const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    NgCalendarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RegisterPage, 
    UsertypePage,
  ],
  entryComponents: [
    UsertypePage,
  ]
})
export class RegisterPageModule {}
