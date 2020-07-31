import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmloyeeEditComponent } from './emloyee-edit.component';

describe('EmloyeeEditComponent', () => {
  let component: EmloyeeEditComponent;
  let fixture: ComponentFixture<EmloyeeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmloyeeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmloyeeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
