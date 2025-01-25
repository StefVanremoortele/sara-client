import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingsComponent } from './buildings.component';
import { MatTableModule } from '@angular/material/table';
import { BuildingDetailComponent } from './building-detail/building-detail.component';
import { RouterModule } from '@angular/router';
import { BuildingsRoutingModule } from './builldings-routing.module';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { PrivativesModule } from '@syndicus/privatives/privatives.module';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '@syndicus/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    BuildingsComponent,
    BuildingDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatTableModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatChipsModule,
    BuildingsRoutingModule,
    PrivativesModule,
    MatButtonModule,
    SharedModule
  ]
})
export class BuildingsModule { }
