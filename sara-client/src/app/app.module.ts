import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list'; 
import {MatDialogModule} from '@angular/material/dialog'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BuildingsComponent } from './buildings/buildings.component';
import { HomeComponent } from './home/home.component';
import { BuildingListItemComponent } from './buildings/building-list-item/building-list-item.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerListItemComponent } from './customers/customer-list/customer-list-item/customer-list-item.component';
import { SidenavModalComponent } from './core/layout/sidenav-modal/sidenav-modal.component';
import { BaseDialogComponent } from './common/dialogs/dialog/dialog.component';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { mockHttpInterceptor } from './core/interceptors/mock-http.interceptor';
import { CustomerDetailsDialogComponent } from './common/dialogs/customer-details-dialog/customer-details-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuildingsComponent,
    BuildingListItemComponent,
    CustomersComponent,
    CustomerListComponent,
    CustomerListItemComponent,
    SidenavModalComponent,
    BaseDialogComponent,
    CustomerDetailsDialogComponent
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
    MatDialogModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([mockHttpInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
