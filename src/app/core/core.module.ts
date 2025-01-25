import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatError, MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { LoginComponent } from './components/login/login.component';
import { BackNavigationComponent } from './components/back-navigation/back-navigation.component';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    LoginComponent,
    BackNavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatLabel,
    MatError,
    MatMenuModule
  ],
  exports: [
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatLabel,
    MatError,
    LoginComponent,
    BackNavigationComponent,
    MatMenuModule
  ]
})
export class CoreModule { }
