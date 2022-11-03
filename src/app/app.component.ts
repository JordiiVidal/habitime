import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { CreateHabitComponent } from './components/create-habit/create-habit.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _bottomSheet: MatBottomSheet) {

  }

  onOpen() {
    this._bottomSheet.open(CreateHabitComponent)
  }
}
