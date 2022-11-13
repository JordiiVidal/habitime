import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Board } from '../../interfaces/board.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-boards-list-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatChipsModule, MatDividerModule],
  template: `
    <div class="card-board" (click)="open()">
      <h3>{{board.name}}</h3>
      <div>
        <span>{{ board.startDate | date }}</span>
        <span>{{ board.endDate | date }}</span>
        <span>{{ board.createdDate | date }}</span>
      </div>
      <div>
        <mat-chip-list aria-label="Goals">
          <mat-chip *ngFor="let goal of board.goals">{{ goal[0] | uppercase}}</mat-chip>
        </mat-chip-list>
      </div>
    </div>
  `,
  styles: [
    '.card-board {cursor:pointer;background: white;height:inherit;width:100%;border-radius:25px;box-sizing: border-box;padding:20px;}',
  ]
})
export class BoardListCardComponent implements OnInit {

  @Input() board: Board;
  @HostBinding('class') class = 'fit-content';
    constructor(private router: Router) { }

  ngOnInit(): void {
  }

  open() {
    this.router.navigate(['boards', this.board.id]);
  }

}
