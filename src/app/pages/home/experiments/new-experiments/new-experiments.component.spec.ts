import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExperimentsComponent } from './new-experiments.component';

describe('NewExperimentsComponent', () => {
  let component: NewExperimentsComponent;
  let fixture: ComponentFixture<NewExperimentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewExperimentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewExperimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
