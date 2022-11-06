import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Habit } from 'src/app/models/habit.model';


export interface Board {
  name: string;
  habits: Habit[];
  motivations: string[];
  status: string;
  startDate: string;
  endDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  boards$ = new Observable();
  private _boardsBS = new BehaviorSubject<Board[]>([]);
  constructor() {
    this.boards$ = this._boardsBS.asObservable();
  }

  addBoard(board: Board) {
    let boards = this.boards;
    boards.push(board);
    this._boardsBS.next(boards);
  }

  get boards() {
    return this._boardsBS.getValue();
  }
}
