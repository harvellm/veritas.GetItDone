import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsearchComponent } from './projectsearch.component';

describe('ProjectsearchComponent', () => {
  let component: ProjectsearchComponent;
  let fixture: ComponentFixture<ProjectsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
