import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { FormHabitComponent } from './components/form-habit/form-habit.component';
@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [
    'body {width: 100vh;height: 100vh;}',
    '.container {display: flex;flex-direction: column;background: #f5f5f5;width: 100%;height: 100%;}',
    '.container .content {flex: 1;padding: 20px;}',
  ],
})
export class AppComponent {

  constructor(
    private _bottomSheet: MatBottomSheet,
  ) { }

  onOpen() {
    this._bottomSheet.open(FormHabitComponent)
  }
}
