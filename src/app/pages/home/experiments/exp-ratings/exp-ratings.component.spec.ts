import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpRatingsComponent } from './exp-ratings.component';

describe('ExpRatingsComponent', () => {
  let component: ExpRatingsComponent;
  let fixture: ComponentFixture<ExpRatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
