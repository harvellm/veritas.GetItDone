import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectcarddataComponent } from './projectcarddata.component';

describe('ProjectcarddataComponent', () => {
  let component: ProjectcarddataComponent;
  let fixture: ComponentFixture<ProjectcarddataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectcarddataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectcarddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
