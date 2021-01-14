/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BackendLinksComponent } from './backend-links.component';

describe('BackendLinksComponent', () => {
  let component: BackendLinksComponent;
  let fixture: ComponentFixture<BackendLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
