import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayOptPage } from './pay-opt.page';

describe('PayOptPage', () => {
  let component: PayOptPage;
  let fixture: ComponentFixture<PayOptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayOptPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayOptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
