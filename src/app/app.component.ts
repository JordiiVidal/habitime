import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { FormHabitComponent } from './components/form-habit/form-habit.component';
@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-sidebar></app-sidebar>
      <div class="content">
        <div class="content-title">
          <span>Boards</span>
        </div>
        <div class="content-body">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
})
export class AppComponent {

  constructor(
    private _bottomSheet: MatBottomSheet,
  ) { }

  onOpen() {
    this._bottomSheet.open(FormHabitComponent)
  }
}
