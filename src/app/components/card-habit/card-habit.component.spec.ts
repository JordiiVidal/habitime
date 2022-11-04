import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHabitComponent } from './card-habit.component';

describe('CardHabitComponent', () => {
  let component: CardHabitComponent;
  let fixture: ComponentFixture<CardHabitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHabitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHabitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
