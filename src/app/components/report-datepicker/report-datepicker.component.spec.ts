import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDatepickerComponent } from './report-datepicker.component';

describe('ReportDatepickerComponent', () => {
  let component: ReportDatepickerComponent;
  let fixture: ComponentFixture<ReportDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
