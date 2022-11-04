import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HabitService } from 'src/app/services/habit.service';

@Component({
  selector: 'app-form-habit',
  templateUrl: './form-habit.component.html',
  styleUrls: ['./form-habit.component.css']
})
export class FormHabitComponent implements OnInit {

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
