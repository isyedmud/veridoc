import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurExpertsPage } from './our-experts.page';

describe('OurExpertsPage', () => {
  let component: OurExpertsPage;
  let fixture: ComponentFixture<OurExpertsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurExpertsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurExpertsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
