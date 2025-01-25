import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from "@angular/material/table";
import { MatListModule } from '@angular/material/list';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { mockHttpInterceptor } from './core/interceptors/mock-http.interceptor';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { CustomersModule } from './customers/customers.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { BuildingsModule } from './buildings/buildings.module';
import { BaseDialogComponent } from './shared/dialogs/dialog/dialog.component';
import { CustomerDetailsDialogComponent } from './shared/dialogs/customer-details-dialog/customer-details-dialog.component';
import { BuildingDetailsDialogComponent } from './shared/dialogs/building-details-dialog/building-details-dialog.component';
import { SupplierDetailsDialogComponent } from '@syndicus/shared/dialogs/supplier-details-dialog/supplier-details-dialog.component';
import { CoreModule } from './core/core.module';
import { PrivativesModule } from './privatives/privatives.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BaseDialogComponent,
    // TODO: Move these to shared module
    CustomerDetailsDialogComponent,
    BuildingDetailsDialogComponent,
    SupplierDetailsDialogComponent,
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
    MatTableModule,
    
    // custom modules
    CoreModule,
    SharedModule,
    CustomersModule,
    SuppliersModule,
    BuildingsModule,
    PrivativesModule,
    
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
