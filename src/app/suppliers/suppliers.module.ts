import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersListComponent } from './suppliers-list/suppliers-list.component';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '@syndicus/shared/shared.module';



@NgModule({
  declarations: [
    SuppliersListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    SharedModule,
  ]
})
export class SuppliersModule { }
