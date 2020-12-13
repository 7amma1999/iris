import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallCenterSummaryCardComponent } from './call-center-summary-card.component';

describe('CallCenterSummaryCardComponent', () => {
  let component: CallCenterSummaryCardComponent;
  let fixture: ComponentFixture<CallCenterSummaryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallCenterSummaryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallCenterSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
