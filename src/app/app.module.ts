import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { BuildTableComponent } from './layout/build-table/build-table.component';
import { OutputTableComponent } from './components/output-table/output-table.component';
import { HeadComponent } from './layout/head/head.component';
import { FootComponent } from './layout/foot/foot.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatStepperModule, MatNativeDateModule, MatDatepickerModule, MatRadioModule, MatSlideToggleModule, MatSelectModule, MatOptionModule, MatTableModule } from '@angular/material';
import { OutputMenuComponent } from './components/output-menu/output-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuildTableComponent,
    OutputTableComponent,
    HeadComponent,
    FootComponent,
    OutputMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,  
    MatStepperModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSelectModule, 
    MatOptionModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
