import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewedCasesPage } from './reviewed-cases.page';

describe('ReviewedCasesPage', () => {
  let component: ReviewedCasesPage;
  let fixture: ComponentFixture<ReviewedCasesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewedCasesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewedCasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
