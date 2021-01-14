import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownObjectListComponent } from './unknown-object-list.component';

describe('UnknownObjectListComponent', () => {
  let component: UnknownObjectListComponent;
  let fixture: ComponentFixture<UnknownObjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnknownObjectListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnknownObjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
