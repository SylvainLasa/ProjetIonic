import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeachItinerairePage } from './seach-itineraire.page';

describe('SeachItinerairePage', () => {
  let component: SeachItinerairePage;
  let fixture: ComponentFixture<SeachItinerairePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeachItinerairePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeachItinerairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
