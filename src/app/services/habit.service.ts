import { Injectable } from '@angular/core';
import { Habit } from '../models/habit.model';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HabitService {

  habitsS: Observable<Habit[]>;
  private _habitsBS = new BehaviorSubject<Habit[]>([]);

  constructor() {
    this.habitsS = this._habitsBS.asObservable();
  }

  create(habit: Habit) {
    let habits = this.habits;
    habits.push(habit);
    this._habitsBS.next(habits);
  }

  get habits() {
    return this._habitsBS.getValue();
  }
}
