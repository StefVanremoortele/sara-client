import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BuildingsComponent} from './buildings/buildings.component';
import {CustomersComponent} from './customers/customers.component';
import {HomeComponent} from './home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './customers/state/effects/counter.effects';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page',
    },
    {
      path: 'buildings',
      component: BuildingsComponent,
      title: 'Buildings page',
    },
    {
      path: 'customers',
      loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule),
      component: CustomersComponent,
      title: 'Customers page',
    },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    EffectsModule.forRoot([]), // Register feature effects
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
