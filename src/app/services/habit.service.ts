import { Injectable } from '@angular/core';
import { Habit } from '../models/habit.model';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HabitService {

  habits$: Observable<Habit[]>;
  isOpened$: Observable<boolean>;
  private _habitsBS = new BehaviorSubject<Habit[]>([]);
  private _isOpenedBS = new BehaviorSubject<boolean>(false);

  constructor() {
    this.habits$ = this._habitsBS.asObservable();
    this.isOpened$ = this._isOpenedBS.asObservable();
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
