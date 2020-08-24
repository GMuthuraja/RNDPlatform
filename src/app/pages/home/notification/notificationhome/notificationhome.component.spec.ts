import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationhomeComponent } from './notificationhome.component';

describe('NotificationhomeComponent', () => {
  let component: NotificationhomeComponent;
  let fixture: ComponentFixture<NotificationhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
