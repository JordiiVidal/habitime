import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DateRange, DefaultMatCalendarRangeStrategy, MatDatepickerModule, MAT_DATE_RANGE_SELECTION_STRATEGY } from '@angular/material/datepicker';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';

interface BoardForm extends FormGroup<{
  name: FormControl<string>;
  goals: FormControl<string[]>;
  dateRange: FormControl<DateRange<Date>>;
}> { }

@Component({
  selector: 'app-boards-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule
  ],
  templateUrl: './board-form.component.html',
  styles: [
    '.mat-form-field{display: block}',
    '::ng-deep .mat-calendar-table-header{display: none;}'
  ],
  providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: DefaultMatCalendarRangeStrategy,
    },
  ],
})
export class BoardFormComponent implements OnInit {

  boardForm: BoardForm;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    let initDateRange = new DateRange(new Date(), null);
    this.boardForm = this.fb.group({
      name: this.fb.control<string>('', { nonNullable: true }),
      goals: this.fb.control<string[]>([], { nonNullable: true }),
      dateRange: this.fb.control<DateRange<Date>>(initDateRange, { nonNullable: true }),
    });
  }

  onSubmit() {

  }

  _onSelectedChange(date: Date): void {
    let newDateRange;
    let currentDateRange = this.boardForm.controls.dateRange.value;
    if (
      currentDateRange &&
      currentDateRange.start &&
      date > currentDateRange.start &&
      !currentDateRange.end
    ) {
      newDateRange = new DateRange(
        currentDateRange.start,
        date
      );
    } else {
      newDateRange = new DateRange(date, null);
    }
    console.log(newDateRange);
    this.boardForm.controls.dateRange.setValue(newDateRange);
    this.boardForm.updateValueAndValidity();
  }

  addGoalsFromInput(event: MatChipInputEvent) {
    if (event.value) {
      let goal = event.value;
      let goals = this.boardForm.controls.goals.value;
      if (!goals.includes(goal) && goals.length < 3) {
        goals.push(goal);
        this.boardForm.controls.goals.setValue(goals);
        this.boardForm.updateValueAndValidity();
      }
      event.chipInput!.clear();
    }
  }

  removeGoal(goal: string) {
    //this.keywords.delete(keyword);
  }

  get form() {
    return this.boardForm.controls;
  }

}
