import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorairesPagePage } from './horaires-page.page';

describe('HorairesPagePage', () => {
  let component: HorairesPagePage;
  let fixture: ComponentFixture<HorairesPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorairesPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorairesPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
