import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorairesArretsPage } from './horaires-arrets.page';

describe('HorairesArretsPage', () => {
  let component: HorairesArretsPage;
  let fixture: ComponentFixture<HorairesArretsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorairesArretsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorairesArretsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
