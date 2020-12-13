import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysChangingComponent } from './days-changing.component';

describe('DaysChangingComponent', () => {
  let component: DaysChangingComponent;
  let fixture: ComponentFixture<DaysChangingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysChangingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysChangingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
