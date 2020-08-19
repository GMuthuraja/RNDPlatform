import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetausersComponent } from './betausers.component';

describe('BetausersComponent', () => {
  let component: BetausersComponent;
  let fixture: ComponentFixture<BetausersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetausersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetausersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
