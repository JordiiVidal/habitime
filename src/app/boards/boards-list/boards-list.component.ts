import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsListButtonComponent } from '../boards-list-button/boards-list-button.component';

@Component({
  selector: 'app-boards-list',
  standalone: true,
  imports: [CommonModule, BoardsListButtonComponent],
  template: `
    <div></div>
    <app-boards-list-button></app-boards-list-button>
  `,
})
export class BoardsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
