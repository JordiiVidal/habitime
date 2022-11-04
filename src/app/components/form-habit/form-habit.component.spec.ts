import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHabitComponent } from './form-habit.component';

describe('FormHabitComponent', () => {
  let component: FormHabitComponent;
  let fixture: ComponentFixture<FormHabitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHabitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHabitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
