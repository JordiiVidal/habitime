import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsListButtonComponent } from '../boards-list-button/boards-list-button.component';
import { BoardsService } from '../../services/boards.service';
import { Board } from '../../models/board.model';
import { BoardsListCardComponent } from '../boards-list-card/boards-list-card.component';

@Component({
  selector: 'app-boards-list',
  standalone: true,
  imports: [CommonModule, BoardsListButtonComponent, BoardsListCardComponent],
  template: `
    <div>
      <app-boards-list-card *ngFor="let board of boards" [board]="board"></app-boards-list-card>
      <div *ngIf="boards.length == 0">Empty</div>
    </div>
    <app-boards-list-button></app-boards-list-button>
  `,
})
export class BoardsListComponent implements OnInit {

  boards: Board[];
  constructor(private boardsService: BoardsService) { }

  ngOnInit(): void {
    this.boardsService.boards$.subscribe((b) => this.boards = b);
  }

}
