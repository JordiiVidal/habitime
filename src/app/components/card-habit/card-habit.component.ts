import { Component, Input, OnInit } from '@angular/core';
import { Habit } from 'src/app/models/habit.model';
import { HabitService } from 'src/app/services/habit.service';

@Component({
  selector: 'app-card-habit',
  templateUrl: './card-habit.component.html',
  styleUrls: ['./card-habit.component.css']
})
export class CardHabitComponent implements OnInit {

  @Input() habit: Habit;
  constructor(private _habitService: HabitService) { }

  ngOnInit(): void {
  }

  showEdit() {
    this._habitService.setOpened();
  }
}
