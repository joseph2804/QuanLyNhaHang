import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultStaffComponent } from './default-staff.component';

describe('DefaultStaffComponent', () => {
  let component: DefaultStaffComponent;
  let fixture: ComponentFixture<DefaultStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
