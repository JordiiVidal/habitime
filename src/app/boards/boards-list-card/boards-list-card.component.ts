import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Board } from '../../interfaces/board.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-boards-list-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatChipsModule, MatDividerModule],
  template: `
    <mat-card class="card-board" (click)="open()">
      <mat-card-title>{{board.name}}</mat-card-title>
      <mat-card-subtitle><span>{{ board.startDate | date }}</span></mat-card-subtitle>
      <mat-card-content>
        <mat-chip-list aria-label="Goals">
          <mat-chip *ngFor="let goal of board.goals">{{ goal[0] | uppercase}}</mat-chip>
        </mat-chip-list>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    '.card-board { width: 200px;position: relative;}',
  ]
})
export class BoardsListCardComponent implements OnInit {

  @Input() board: Board;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  open() {
    this.router.navigate(['board']);
  }

}
