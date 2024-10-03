import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { HomeRoutingModule } from './home-routing.module';

// Angular Material Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { ListTaskComponent } from './components/list-task/list-task.component';

@NgModule({
  declarations: [
    HomeComponent,
    NewTaskComponent,
    ListTaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE, useValue: 'es-CO'
    }
  ]
})
export class HomeModule { }
