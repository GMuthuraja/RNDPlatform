import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetauserhomeComponent } from './betauserhome.component';

describe('BetauserhomeComponent', () => {
  let component: BetauserhomeComponent;
  let fixture: ComponentFixture<BetauserhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetauserhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetauserhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
