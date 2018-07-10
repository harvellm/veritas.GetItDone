import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportpickerComponent } from './reportpicker.component';

describe('ReportpickerComponent', () => {
  let component: ReportpickerComponent;
  let fixture: ComponentFixture<ReportpickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportpickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
