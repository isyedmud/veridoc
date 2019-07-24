import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvideInputPage } from './provide-input.page';

describe('ProvideInputPage', () => {
  let component: ProvideInputPage;
  let fixture: ComponentFixture<ProvideInputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvideInputPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvideInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
