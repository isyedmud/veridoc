import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydocumentsPage } from './mydocuments.page';

describe('MydocumentsPage', () => {
  let component: MydocumentsPage;
  let fixture: ComponentFixture<MydocumentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydocumentsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydocumentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
