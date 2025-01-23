import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivativeDetailComponent } from './privative-detail/privative-detail.component';
import { PrivativeListItemComponent } from './privative-list-item/privative-list-item.component';



@NgModule({
  declarations: [
    PrivativeDetailComponent,
    PrivativeListItemComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    PrivativeDetailComponent,
    PrivativeListItemComponent

  ]
})
export class PrivativesModule { }
