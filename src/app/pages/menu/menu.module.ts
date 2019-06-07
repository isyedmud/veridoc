import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { AuthGuard } from 'src/app/services/auth/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: MenuPage,
        children: [
          {path: 'landing', loadChildren: '../landing/landing.module#LandingPageModule'},
          {path: 'expertsreview', loadChildren: '../expertsreview/expertsreview.module#ExpertsreviewPageModule', canActivate: [ AuthGuard ]},
        ]
      }
    ])
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
