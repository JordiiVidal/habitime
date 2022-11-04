import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { FormHabitComponent } from './components/form-habit/form-habit.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _bottomSheet: MatBottomSheet) {

  }

  onOpen() {
    this._bottomSheet.open(FormHabitComponent)
  }
}
