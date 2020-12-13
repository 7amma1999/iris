import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCallCenterComponent } from './sales-call-center.component';

describe('SalesCallCenterComponent', () => {
  let component: SalesCallCenterComponent;
  let fixture: ComponentFixture<SalesCallCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesCallCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesCallCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
