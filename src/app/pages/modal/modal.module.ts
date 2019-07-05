import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ContactusPage } from './contactus/contactus.page';
import { FeedbackPage } from './feedback/feedback.page';
import { IonicRatingModule } from 'ionic4-rating';
import { ExpertCommentPage } from './expert-comment/expert-comment.page';

@NgModule({
  declarations: [
    ContactusPage,
    FeedbackPage,
    ExpertCommentPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    IonicRatingModule
  ],
  exports: [
    ContactusPage,
    FeedbackPage,
    ExpertCommentPage
  ],
  entryComponents: [
    ContactusPage,
    FeedbackPage,
    ExpertCommentPage
  ]
})
export class ModalModule { }
