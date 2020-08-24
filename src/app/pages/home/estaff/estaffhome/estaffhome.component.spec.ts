import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstaffhomeComponent } from './estaffhome.component';

describe('EstaffhomeComponent', () => {
  let component: EstaffhomeComponent;
  let fixture: ComponentFixture<EstaffhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstaffhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstaffhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
