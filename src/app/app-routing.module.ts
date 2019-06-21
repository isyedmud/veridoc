import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'menu/landing', pathMatch: 'full' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule'},
  { path: 'faq', loadChildren: './pages/faq/faq.module#FaqPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule', canActivate: [AuthGuard]},
  { path: 'pay-opt', loadChildren: './pages/pay-opt/pay-opt.module#PayOptPageModule', canActivate: [AuthGuard]},
  { path: 'mydocuments', loadChildren: './pages/user/mydocuments/mydocuments.module#MydocumentsPageModule', canActivate: [AuthGuard]},
  { path: 'view-attachment', loadChildren: './pages/expert/view-attachment/view-attachment.module#ViewAttachmentPageModule', canActivate:[AuthGuard] },
  { path: 'reviewed-cases', loadChildren: './pages/expert/reviewed-cases/reviewed-cases.module#ReviewedCasesPageModule', canActivate:[AuthGuard] },
  { path: 'our-experts', loadChildren: './pages/our-experts/our-experts.module#OurExpertsPageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
