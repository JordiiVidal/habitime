import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DateRange, DefaultMatCalendarRangeStrategy, MatDatepickerModule, MAT_DATE_RANGE_SELECTION_STRATEGY } from '@angular/material/datepicker';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { BoardsService } from '../../services/boards.service';
import { Board } from '../../models/board.model';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

interface BoardForm extends FormGroup<{
  name: FormControl<string>;
  goals: FormControl<string[]>;
  startDate: FormControl<string>;
  endDate: FormControl<string>;
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
    MatChipsModule,
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './boards-form.component.html',
  styles: [
    '.mat-form-field{display: block}',
    '::ng-deep .mat-calendar-table-header{display: none;}',
    '::ng-deep .mat-calendar-header{padding: 0!important;}',
    '.inline-calendar-card{width: 300px; margin: auto;padding-top: 8px;}',
    '.btn-submit{margin: 16px 0px 8px 0; width: 100%;}'
  ],
  providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: DefaultMatCalendarRangeStrategy,
    },
  ],
})
export class BoardsFormComponent implements OnInit {

  boardForm: BoardForm;

  constructor(
    private fb: FormBuilder,
    private _boardService: BoardsService,
    private _bottomSheetRef: MatBottomSheetRef<BoardsFormComponent>
  ) { }

  ngOnInit(): void {
    let initDateRange = new DateRange(new Date(), null);
    this.boardForm = this.fb.group({
      name: this.fb.control<string>('', { nonNullable: true, validators: [Validators.required] }),
      goals: this.fb.control<string[]>([], { nonNullable: true, validators: [Validators.required, Validators.minLength(3)] }),
      startDate: this.fb.control<string>('', { nonNullable: true, validators: [Validators.required] }),
      endDate: this.fb.control<string>('', { nonNullable: true, validators: [Validators.required] }),
      dateRange: this.fb.control<DateRange<Date>>(initDateRange, { nonNullable: true, validators: [Validators.required] }),
    });
  }

  onSubmit() {
    if (this.boardForm.status != 'VALID') return;
    if (!this.dateRange.value.start || !this.dateRange.value.end) return;//TODO CUSTOM VALIDATION RANGE
    this._boardService.addBoard(new Board(this.boardForm.value));
    this._bottomSheetRef.dismiss();
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
    this.boardForm.controls.dateRange.setValue(newDateRange);
    this.boardForm.controls.startDate.setValue(newDateRange.start?.toDateString() ?? '');
    this.boardForm.controls.endDate.setValue(newDateRange.end?.toDateString() ?? '');
    this.boardForm.updateValueAndValidity();
  }

  addGoalsFromInput(event: MatChipInputEvent) {
    if (event.value) {
      let goal = event.value;
      let goals = this.goals.value ?? [];
      if (!goals.includes(goal) && goals.length < 3) goals.push(goal);
      this.boardForm.controls.goals.setValue(goals);
      event.chipInput!.clear();
    }
  }

  removeGoal(goal: string) {
    let goals = this.goals.value ?? [];
    if (goals && goals.includes(goal)) {
      this.boardForm.controls.goals.setValue(goals.filter((g) => g != goal));
    }
  }

  get form() {
    return this.boardForm.controls;
  }

  get name() {
    return this.boardForm.controls.name;
  }

  get goals() {
    return this.boardForm.controls.goals;
  }

  get dateRange() {
    return this.boardForm.controls.dateRange;
  }


}
