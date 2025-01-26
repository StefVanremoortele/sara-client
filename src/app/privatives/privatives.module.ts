import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivativeDetailComponent } from './privative-detail/privative-detail.component';
import { PrivativeListItemComponent } from './privative-list-item/privative-list-item.component';
import { PrivativesOverviewComponent } from './privatives-overview/privatives-overview.component';
import { PrivativesRoutingModule } from './privatives-routing.module';


@NgModule({
  declarations: [
    PrivativeDetailComponent,
    PrivativeListItemComponent,
    PrivativesOverviewComponent
  ],
  imports: [
    CommonModule,
    PrivativesRoutingModule,
  ],
  exports: [
    PrivativeDetailComponent,
    PrivativeListItemComponent
  ]
})
export class PrivativesModule { }
