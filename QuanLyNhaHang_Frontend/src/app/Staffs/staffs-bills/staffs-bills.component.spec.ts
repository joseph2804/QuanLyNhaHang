import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsBillsComponent } from './staffs-bills.component';

describe('StaffsBillsComponent', () => {
  let component: StaffsBillsComponent;
  let fixture: ComponentFixture<StaffsBillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffsBillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffsBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
