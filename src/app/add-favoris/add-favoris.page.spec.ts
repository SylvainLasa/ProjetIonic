import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFavorisPage } from './add-favoris.page';

describe('AddFavorisPage', () => {
  let component: AddFavorisPage;
  let fixture: ComponentFixture<AddFavorisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFavorisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFavorisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
