import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsInfoComponent } from './staffs-info.component';

describe('StaffsInfoComponent', () => {
  let component: StaffsInfoComponent;
  let fixture: ComponentFixture<StaffsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
