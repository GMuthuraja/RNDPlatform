import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentshomeComponent } from './experimentshome.component';

describe('ExperimentshomeComponent', () => {
  let component: ExperimentshomeComponent;
  let fixture: ComponentFixture<ExperimentshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
