import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardListButtonComponent } from '../board-list-button/board-list-button.component';
import { BoardsService } from '../../services/boards.service';
import { Board } from '../../interfaces/board.interface';
import { BoardListCardComponent } from '../board-list-card/board-list-card.component';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-boards-list',
  standalone: true,
  imports: [
    CommonModule,
    BoardListButtonComponent,
    BoardListCardComponent,
    MatGridListModule
  ],
  template: `
    <mat-grid-list cols="4" [gutterSize]="'20px'" rowHeight="2:0.5">
      <mat-grid-tile
          *ngFor="let board of boards"
          [colspan]="2"
          [rowspan]="row">
          <app-boards-list-card [board]="board"></app-boards-list-card>
      </mat-grid-tile>
    </mat-grid-list>
    <app-boards-list-button></app-boards-list-button>
  `,
  styles: [
    '.cards{display: flex;flex-direction: row;gap: 20px;}'
  ]
})
export class BoardListComponent implements OnInit {

  private _rows: number[];
  private _lastRow: number;
  boards: Board[];
  constructor(private boardsService: BoardsService) {
    this._rows = [3, 4, 5];
  }

  ngOnInit(): void {
    this.boardsService.boards$.subscribe((b) => this.boards = b);
  }

  get row(): number {
    let row;
    do {
      row = this.rowRandom;
    } while (row == this._lastRow)
    this._lastRow = row;
    return row;
  }

  get rowRandom(): number {
    return this._rows[Math.floor(Math.random() * this._rows.length)]
  }
}
