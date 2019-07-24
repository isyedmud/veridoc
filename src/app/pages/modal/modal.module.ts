import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ContactusPage } from './contactus/contactus.page';
import { FeedbackPage } from './feedback/feedback.page';
import { IonicRatingModule } from 'ionic4-rating';
import { ExpertCommentPage } from './expert-comment/expert-comment.page';
import { AssignCategoryPage } from './assign-category/assign-category.page';
import { ProvideInputPage } from './provide-input/provide-input.page';
import { FileUploadModule } from 'ng2-file-upload';
import { MultiFileUploadComponent } from 'src/app/components/multi-file-upload/multi-file-upload.component';

@NgModule({
  declarations: [
    ContactusPage,
    FeedbackPage,
    ExpertCommentPage,
    AssignCategoryPage,
    ProvideInputPage,
    MultiFileUploadComponent
  ],
  imports: [
    CommonModule,
    FileUploadModule,
    IonicModule,
    FormsModule,
    IonicRatingModule
  ],
  exports: [
    ContactusPage,
    FeedbackPage,
    ExpertCommentPage,
    AssignCategoryPage,
    ProvideInputPage,
    MultiFileUploadComponent
  ],
  entryComponents: [
    ContactusPage,
    FeedbackPage,
    ExpertCommentPage,
    AssignCategoryPage,
    ProvideInputPage,
    MultiFileUploadComponent
  ]
})
export class ModalModule { }
