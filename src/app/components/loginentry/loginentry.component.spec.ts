import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginentryComponent } from './loginentry.component';

describe('LoginentryComponent', () => {
  let component: LoginentryComponent;
  let fixture: ComponentFixture<LoginentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
