import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Board } from '../models/board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  boards$ = new Observable<Board[]>();
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
