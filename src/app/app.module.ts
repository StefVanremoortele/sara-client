import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BuildingsComponent } from './buildings/buildings.component';
import { HomeComponent } from './home/home.component';
import { BuildingListItemComponent } from './buildings/building-list-item/building-list-item.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerListItemComponent } from './customers/customer-list/customer-list-item/customer-list-item.component';
import { BaseDialogComponent } from './common/dialogs/dialog/dialog.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { mockHttpInterceptor } from './core/interceptors/mock-http.interceptor';
import { CustomerDetailsDialogComponent } from './common/dialogs/customer-details-dialog/customer-details-dialog.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CustomersModule } from './customers/customers.module';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuildingsComponent,
    BuildingListItemComponent,
    BaseDialogComponent,
    CustomerDetailsDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    
    // custom modules
    CustomersModule,
    
    // state management
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]), // Initialize EffectsModule
    
    // debugging
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      // logOnly: environment.production,
      logOnly: false,
    }),
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([mockHttpInterceptor])),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
