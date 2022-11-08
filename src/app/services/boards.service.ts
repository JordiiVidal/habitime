import { Injectable } from '@angular/core';
import { Firestore, collection, CollectionReference, DocumentData, collectionData, addDoc } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Board } from '../interfaces/board.interface';

@Injectable()
export class BoardsService {

  private collection: CollectionReference<DocumentData>;
  boards$ = new Observable<Board[]>();
  private _boardsBS = new BehaviorSubject<Board[]>([]);
  constructor(private readonly firestore: Firestore) {
    this.collection = collection(this.firestore, 'boards');
    this.boards$ = this._boardsBS.asObservable();
    this.getAll();
  }

  async create(board: Board) {
    await addDoc(this.collection, board);
    this.getAll();
  }

  getAll(){
    const data = collectionData(this.collection, {idField: 'id'}) as Observable<Board[]>;
    data.subscribe(data => this._boardsBS.next(data));
  }

  get boards() {
    return this._boardsBS.getValue();
  }
}
