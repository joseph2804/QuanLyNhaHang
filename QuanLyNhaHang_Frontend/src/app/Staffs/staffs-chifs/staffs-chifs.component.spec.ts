import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsChifsComponent } from './staffs-chifs.component';

describe('StaffsChifsComponent', () => {
  let component: StaffsChifsComponent;
  let fixture: ComponentFixture<StaffsChifsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffsChifsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffsChifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
