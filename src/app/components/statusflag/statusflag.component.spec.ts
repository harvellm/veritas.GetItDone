import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusflagComponent } from './statusflag.component';

describe('StatusflagComponent', () => {
  let component: StatusflagComponent;
  let fixture: ComponentFixture<StatusflagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusflagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusflagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
