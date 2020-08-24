import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeashomeComponent } from './ideashome.component';

describe('IdeashomeComponent', () => {
  let component: IdeashomeComponent;
  let fixture: ComponentFixture<IdeashomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeashomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeashomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
