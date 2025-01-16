import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CustomerListItemComponent } from './customer-list/customer-list-item/customer-list-item.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersComponent } from './customers.component';
import { counterReducer } from './state/reducers/counter.reducer';

import { CounterEffects } from './state/effects/counter.effects';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerListComponent,
    CustomerListItemComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('counter', counterReducer), // Register feature state
    EffectsModule.forFeature([CounterEffects]), // Register feature effects
  ],
})
export class CustomersModule {}
