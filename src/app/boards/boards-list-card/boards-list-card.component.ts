import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boards-list-card',
  standalone: true,
  imports: [CommonModule],
  template: `<p>boards-list-card works!</p>`,
})
export class BoardsListCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
