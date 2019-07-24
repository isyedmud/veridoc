import { Component, ViewChild, ElementRef, Input, OnInit, SimpleChanges } from '@angular/core';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';

@Component({
  selector: 'app-multi-file-upload',
  templateUrl: './multi-file-upload.component.html',
  styleUrls: ['./multi-file-upload.component.scss'],
})
export class MultiFileUploadComponent implements OnInit {
  @ViewChild('ng2FileSelect') ng2FileSelect: ElementRef;
  @Input('draftFiles') draftFiles = [];
  arrDrafts = [];

  public uploader: FileUploader = new FileUploader({
    allowedMimeType: ['image/png', 'image/gif', 'image/jpeg', 'application/pdf']
  });
  public hasBaseDropZoneOver: boolean = false;

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log("draft", changes);
    if(changes.draftFiles.currentValue.length > 0) {
      this.arrDrafts = changes.draftFiles.currentValue;
    } else {
      this.arrDrafts = [];
    }
    console.log(this.arrDrafts);
  }

  onClickFileSelector() {
    this.ng2FileSelect.nativeElement.click();
  }

  getFiles(): FileLikeObject[] {
    return this.uploader.queue.map((fileItem) => {
      return fileItem.file;
    });
  }

  getDraftFiles() {
    return this.arrDrafts;
  }

  fileOverBase(ev): void {
    this.hasBaseDropZoneOver = ev;
  }

  onClickRemoveDraftFile(index) {
    this.arrDrafts.splice(index, 1);
  }

}
