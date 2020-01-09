import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarAddComponent } from './bar-add/bar-add.component';
import { BarListComponent } from './bar-list/bar-list.component';


const routes: Routes = [
  { path: 'partners', component: BarAddComponent },
  { path: 'ListBar', component: BarListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarRoutingModule { }
