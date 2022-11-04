import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardHabitComponent } from './components/card-habit/card-habit.component';
import { FormHabitComponent } from './components/form-habit/form-habit.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardHabitComponent,
    FormHabitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
