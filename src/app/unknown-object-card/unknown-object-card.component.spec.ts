import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownObjectCardComponent } from './unknown-object-card.component';

describe('UnknownObjectCardComponent', () => {
  let component: UnknownObjectCardComponent;
  let fixture: ComponentFixture<UnknownObjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnknownObjectCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnknownObjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
