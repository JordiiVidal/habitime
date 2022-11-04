import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { FormHabitComponent } from './components/form-habit/form-habit.component';
import { HabitService } from './services/habit.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  isOpened: boolean;
  private _mobileQueryListener: () => void;

  constructor(
    private _bottomSheet: MatBottomSheet,
    private _habitService: HabitService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this._habitService.isOpenedS.subscribe((val) => this.isOpened = val);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  onOpen() {
    this._bottomSheet.open(FormHabitComponent)
  }
}
