import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPiechartComponent } from './report-piechart.component';

describe('ReportPiechartComponent', () => {
  let component: ReportPiechartComponent;
  let fixture: ComponentFixture<ReportPiechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportPiechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
