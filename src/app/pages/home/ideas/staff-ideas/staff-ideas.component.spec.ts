import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffIdeasComponent } from './staff-ideas.component';

describe('StaffIdeasComponent', () => {
  let component: StaffIdeasComponent;
  let fixture: ComponentFixture<StaffIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
