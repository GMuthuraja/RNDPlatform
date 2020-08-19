import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExperimentsComponent } from './view-experiments.component';

describe('ViewExperimentsComponent', () => {
  let component: ViewExperimentsComponent;
  let fixture: ComponentFixture<ViewExperimentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewExperimentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExperimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
