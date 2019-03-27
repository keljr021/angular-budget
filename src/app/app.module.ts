import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { BuildTableComponent } from './layout/build-table/build-table.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { StructureComponent } from './components/structure/structure.component';
import { OutputTableComponent } from './components/output-table/output-table.component';
import { ValuesComponent } from './components/values/values.component';
import { StylesComponent } from './components/styles/styles.component';
import { DownloadComponent } from './components/download/download.component';
import { HeadComponent } from './layout/head/head.component';
import { FootComponent } from './layout/foot/foot.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuildTableComponent,
    BreadcrumbsComponent,
    StructureComponent,
    OutputTableComponent,
    ValuesComponent,
    StylesComponent,
    DownloadComponent,
    HeadComponent,
    FootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
