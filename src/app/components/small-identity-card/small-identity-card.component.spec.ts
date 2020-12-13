import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallIdentityCardComponent } from './small-identity-card.component';

describe('SmallIdentityCardComponent', () => {
  let component: SmallIdentityCardComponent;
  let fixture: ComponentFixture<SmallIdentityCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallIdentityCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallIdentityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
