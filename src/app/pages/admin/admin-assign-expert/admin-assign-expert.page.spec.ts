import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAssignExpertPage } from './admin-assign-expert.page';

describe('AdminAssignExpertPage', () => {
  let component: AdminAssignExpertPage;
  let fixture: ComponentFixture<AdminAssignExpertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAssignExpertPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAssignExpertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
