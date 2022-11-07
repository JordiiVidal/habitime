import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BoardsFormComponent } from '../boards-form/boards-form.component';

@Component({
  selector: 'app-boards-list-button',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  template: `
    <button mat-fab color="warn" (click)="onClick()">
        <mat-icon>add</mat-icon>
    </button>
  `,
  styles: [
    'button{ position: fixed; right: 20px; bottom: 20px;}'
  ]
})
export class BoardsListButtonComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet,) { }

  ngOnInit(): void {
  }

  onClick() {
    this._bottomSheet.open(BoardsFormComponent);
  }
}
