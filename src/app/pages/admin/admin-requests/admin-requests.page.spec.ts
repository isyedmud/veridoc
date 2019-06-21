import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRequestsPage } from './admin-requests.page';

describe('AdminRequestsPage', () => {
  let component: AdminRequestsPage;
  let fixture: ComponentFixture<AdminRequestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRequestsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRequestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
