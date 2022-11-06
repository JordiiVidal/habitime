import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { HabitService } from 'src/app/services/habit.service';

@Component({
  selector: 'app-form-habit',
  templateUrl: './form-habit.component.html',
  styleUrls: ['./form-habit.component.css']
})
export class FormHabitComponent implements OnInit {

  habitForm: UntypedFormGroup;
  constructor(
    private habitService: HabitService,
    private _bottomSheetRef: MatBottomSheetRef<FormHabitComponent>
  ) {
    this.habitForm = new UntypedFormGroup({
      name: new UntypedFormControl('', { validators: [Validators.required] }),
      description: new UntypedFormControl('', { validators: [Validators.required] }),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.habitForm.errors) return;
    console.log(this.habitForm.value);
    this.habitService.create(this.habitForm.value);
    this._bottomSheetRef.dismiss();
  }
}
