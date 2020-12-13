import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebInteractionComponent } from './web-interaction.component';

describe('WebInteractionComponent', () => {
  let component: WebInteractionComponent;
  let fixture: ComponentFixture<WebInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
