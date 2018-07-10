import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectprogressbarComponent } from './projectprogressbar.component';

describe('ProjectprogressbarComponent', () => {
  let component: ProjectprogressbarComponent;
  let fixture: ComponentFixture<ProjectprogressbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectprogressbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectprogressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
