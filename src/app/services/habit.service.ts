import { Injectable } from '@angular/core';
import { Habit } from '../models/habit.model';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HabitService {

  habitsS: Observable<Habit[]>;
  isOpenedS: Observable<boolean>;
  private _habitsBS = new BehaviorSubject<Habit[]>([]);
  private _isOpenedBS = new BehaviorSubject<boolean>(false);

  constructor() {
    this.habitsS = this._habitsBS.asObservable();
    this.isOpenedS = this._isOpenedBS.asObservable();
  }

  create(habit: Habit) {
    let habits = this.habits;
    habits.push(habit);
    this._habitsBS.next(habits);
  }

  toggle() {
    this._isOpenedBS.next(!this.isOpened);
  }

  get habits() {
    return this._habitsBS.getValue();
  }

  get isOpened() {
    return this._isOpenedBS.getValue();
  }
}
