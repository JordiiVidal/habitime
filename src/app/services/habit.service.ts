import { Injectable } from '@angular/core';
import { Habit } from '../models/habit.model';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HabitService {

  habits: Observable<Habit[]>;
  private _habitsBS = new BehaviorSubject<Habit[]>([]);

  constructor() {
    this.habits = this._habitsBS.asObservable();
  }

  create(habit: Habit) {
    let habits = this._habitsBS.getValue();
    habits.push(habit);
    this._habitsBS.next(habits);
  }
}
