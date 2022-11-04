import { Component, Input, OnInit } from '@angular/core';
import { Habit } from 'src/app/models/habit.model';

@Component({
  selector: 'app-card-habit',
  templateUrl: './card-habit.component.html',
  styleUrls: ['./card-habit.component.css']
})
export class CardHabitComponent implements OnInit {

  @Input() habit: Habit;
  constructor() { }

  ngOnInit(): void {
  }

}
