import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './layout/home/home.component';
import { BuildTableComponent } from './layout/build-table/build-table.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'build', component: BuildTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
