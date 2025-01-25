import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CustomerListItemComponent } from '@syndicus/customers/customer-list/customer-list-item/customer-list-item.component';
import { CustomerListComponent } from '@syndicus/customers/customer-list/customer-list.component';
import { CustomersComponent } from '@syndicus/customers/customers.component';
import { counterReducer } from '@syndicus/customers/state/reducers/counter.reducer';
import { CounterEffects } from '@syndicus/customers/state/effects/counter.effects';
import { SharedModule } from '@syndicus/shared/shared.module';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerListComponent,
    CustomerListItemComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    SharedModule,
    StoreModule.forFeature('counter', counterReducer),
    EffectsModule.forFeature([CounterEffects]),
  ],
})
export class CustomersModule {}
