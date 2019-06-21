import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCasesPage } from './all-cases.page';

describe('AllCasesPage', () => {
  let component: AllCasesPage;
  let fixture: ComponentFixture<AllCasesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCasesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
