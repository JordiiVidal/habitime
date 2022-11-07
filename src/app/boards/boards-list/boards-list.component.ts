import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsListButtonComponent } from '../boards-list-button/boards-list-button.component';
import { BoardsService } from '../boards.service';
import { Board } from '../board.model';

@Component({
  selector: 'app-boards-list',
  standalone: true,
  imports: [CommonModule, BoardsListButtonComponent],
  template: `
    <div>
      <div *ngFor="let board of boards">{{board.name}}</div>
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
