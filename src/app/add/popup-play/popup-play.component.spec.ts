import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPlayComponent } from './popup-play.component';

describe('PopupPlayComponent', () => {
  let component: PopupPlayComponent;
  let fixture: ComponentFixture<PopupPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
