import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { AuthGuard } from 'src/app/services/auth/auth.guard';
import { FilterPage } from '../popover/filter/filter.page';

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
          {path: 'expertsreview/:requestId', loadChildren: '../user/expertsreview/expertsreview.module#ExpertsreviewPageModule', canActivate: [ AuthGuard ]},
          {path: 'myrequests', loadChildren: '../user/request-list/request-list.module#RequestListPageModule', canActivate: [ AuthGuard ] },
          {path: 'expert-requests', loadChildren: '../expert/request/request.module#RequestPageModule', canActivate: [ AuthGuard ]},
          { path: 'admin-requests', loadChildren: '../admin/admin-requests/admin-requests.module#AdminRequestsPageModule', canActivate: [AuthGuard] },
          { path: 'adminallcases', loadChildren: '../admin/all-cases/all-cases.module#AllCasesPageModule', canActivate: [AuthGuard] },
          { path: 'admin-users', loadChildren: '../admin/users/users.module#UsersPageModule' },
        ]
      }
    ])
  ],
  declarations: [
    MenuPage,
    FilterPage
  ],
  entryComponents: [
    FilterPage
  ]
})
export class MenuPageModule {}
