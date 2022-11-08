import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsListButtonComponent } from '../boards-list-button/boards-list-button.component';
import { BoardsService } from '../../services/boards.service';
import { Board } from '../../interfaces/board.interface';
import { BoardsListCardComponent } from '../boards-list-card/boards-list-card.component';

@Component({
  selector: 'app-boards-list',
  standalone: true,
  imports: [CommonModule, BoardsListButtonComponent, BoardsListCardComponent],
  template: `
    <div class="cards">
      <app-boards-list-card *ngFor="let board of boards" [board]="board"></app-boards-list-card>
    </div>
    <app-boards-list-button></app-boards-list-button>
  `,
  styles: [
    '.cards{display: flex;flex-direction: row;gap: 20px;}'
  ]
})
export class BoardsListComponent implements OnInit {

  boards: Board[];
  constructor(private boardsService: BoardsService) { }

  ngOnInit(): void {
    this.boardsService.boards$.subscribe((b) => this.boards = b);
  }

}
