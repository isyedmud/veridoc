import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertCommentPage } from './expert-comment.page';

describe('ExpertCommentPage', () => {
  let component: ExpertCommentPage;
  let fixture: ComponentFixture<ExpertCommentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertCommentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertCommentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
