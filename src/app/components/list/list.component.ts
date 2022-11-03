import { Component, OnInit } from '@angular/core';
import { Habit } from 'src/app/models/habit.model';
import { HabitService } from '../../services/habit.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  date: string;
  habits: Habit[];

  constructor(private habitService: HabitService) {
    this.habits = [];
    this.date = new Date().toLocaleString();
  }

  ngOnInit(): void {
    this.habitService.habits.subscribe((data) => {
      this.habits = data;
    })
  }

}
