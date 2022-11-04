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
    this.date = new Date().toLocaleString();
    this.habits = [];
  }

  ngOnInit(): void {
    this.habitService.habitsS.subscribe((data) => this.habits = data);
  }

}
