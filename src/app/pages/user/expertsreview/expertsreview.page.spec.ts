import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsreviewPage } from './expertsreview.page';

describe('ExpertsreviewPage', () => {
  let component: ExpertsreviewPage;
  let fixture: ComponentFixture<ExpertsreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertsreviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
