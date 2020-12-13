import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UssdComponent } from './ussd.component';

describe('UssdComponent', () => {
  let component: UssdComponent;
  let fixture: ComponentFixture<UssdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UssdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UssdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
