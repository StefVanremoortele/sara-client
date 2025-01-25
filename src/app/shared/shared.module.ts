import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTitleComponent } from './components/view-title/view-title.component';
import { DebugTitleComponent } from './components/debug-title/debug-title.component';
import { SearchComponent } from './components/search/search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    ViewTitleComponent,
    DebugTitleComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
  ],
  exports: [
    ViewTitleComponent,
    DebugTitleComponent,
    SearchComponent
  ]
})
export class SharedModule { }
