import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MatBottomSheetModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class MaterialModule { }
