import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardHabitComponent } from './components/card-habit/card-habit.component';
import { FormHabitComponent } from './components/form-habit/form-habit.component';
import { EditHabitComponent } from './components/edit-habit/edit-habit.component';
import { AppRoutingModule } from './app-routing.module';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { BoardsService } from './services/boards.service';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardHabitComponent,
    FormHabitComponent,
    EditHabitComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    SharedModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),    
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
    BoardsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
