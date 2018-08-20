import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBarsComponent } from './report-bars.component';

describe('ReportBarsComponent', () => {
  let component: ReportBarsComponent;
  let fixture: ComponentFixture<ReportBarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportBarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
