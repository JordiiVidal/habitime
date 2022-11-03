import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Habit } from 'src/app/models/habit.model';
import { HabitService } from 'src/app/services/habit.service';

@Component({
  selector: 'app-create-habit',
  templateUrl: './create-habit.component.html',
  styleUrls: ['./create-habit.component.css']
})
export class CreateHabitComponent implements OnInit {

  habitForm: FormGroup;
  constructor(private habitService: HabitService) {
    this.habitForm = new FormGroup({
      name: new FormControl('', { validators: [Validators.required] }),
      description: new FormControl('', { validators: [Validators.required] }),
    })

  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.habitForm.errors) return;
    console.log(this.habitForm.value);
    this.habitService.create(this.habitForm.value);
  }
}
