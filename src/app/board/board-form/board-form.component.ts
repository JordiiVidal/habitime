import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DateRange, DefaultMatCalendarRangeStrategy, MatDatepickerModule, MAT_DATE_RANGE_SELECTION_STRATEGY } from '@angular/material/datepicker';
import { BoardsService } from '../../services/boards.service';
import { Board } from '../../interfaces/board.interface';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

interface BoardForm extends FormGroup<{
  name: FormControl<string>;
  startDate: FormControl<string>;
  endDate: FormControl<string>;
  createdDate: FormControl<string>;
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
  ],
  template: `
  <div class="content-form">
      <form [formGroup]="boardForm" (ngSubmit)="onSubmit()">
          <h1>Board</h1>
          <mat-form-field appearance="outline">
              <mat-label>Name</mat-label>
              <input matInput type="text" placeholder="Name" formControlName="name" [ngClass]="{'in-valid': name.valid}">
          </mat-form-field>
          <div class="inline-calendar-card">
              <mat-calendar [selected]="dateRange" (selectedChange)="_onSelectedChange($event)"></mat-calendar>
          </div>
          <button mat-raised-button color="primary" class="btn-submit" type="submit" [disabled]="!boardForm.valid">Create</button>
      </form>
  </div>
  `,
  styles: [
    '.content-form{ position: relative;padding: 20px 20px 0 20px;}',
    '.mat-form-field{display: block}',
    '::ng-deep .mat-calendar-table-header{display: none;}',
    '::ng-deep .mat-calendar-header{padding: 0!important;}',
    '.inline-calendar-card{width: 440px; margin: auto;}',
    '.btn-submit{margin: 16px 0px 8px 0; width: 100%;}'
  ],
  providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: DefaultMatCalendarRangeStrategy,
    },
  ],
})
export class BoardFormComponent implements OnInit {

  today: Date;
  boardForm: BoardForm;
  dateRange: DateRange<Date>;

  constructor(
    private fb: FormBuilder,
    private _boardService: BoardsService,
    private _bottomSheetRef: MatBottomSheetRef<BoardFormComponent>
  ) { 
    this.today = new Date(); 
  }

  ngOnInit(): void {
    this.dateRange = new DateRange(this.today, null);
    this.boardForm = this.fb.group({
      name: this.fb.control<string>('', { nonNullable: true, validators: [Validators.required] }),
      startDate: this.fb.control<string>('', { nonNullable: true, validators: [Validators.required] }),
      endDate: this.fb.control<string>('', { nonNullable: true, validators: [Validators.required] }),
      createdDate: this.fb.control<string>(this.today.toDateString(), { nonNullable: true, validators: [Validators.required] }),
    });
  }

  onSubmit() {
    if (this.boardForm.status != 'VALID') return;
    if (!this.dateRange.start || !this.dateRange.end) return;//TODO CUSTOM VALIDATION RANGE
    this._boardService.create(this.boardForm.value as Board);
    this._bottomSheetRef.dismiss();
  }

  _onSelectedChange(date: Date): void {
    let newDateRange;
    if (
      this.dateRange &&
      this.dateRange.start &&
      date > this.dateRange.start &&
      !this.dateRange.end
    ) {
      newDateRange = new DateRange(
        this.dateRange.start,
        date
      );
    } else {
      newDateRange = new DateRange(date, null);
    }
    this.dateRange = newDateRange;
    this.boardForm.controls.startDate.setValue(newDateRange.start?.toDateString() ?? '');
    this.boardForm.controls.endDate.setValue(newDateRange.end?.toDateString() ?? '');
    this.boardForm.updateValueAndValidity();
  }

  get form() {
    return this.boardForm.controls;
  }

  get name() {
    return this.boardForm.controls.name;
  }
  get startDate() {
    return this.boardForm.controls.startDate;
  }

  get endDate() {
    return this.boardForm.controls.endDate;
  }

}
