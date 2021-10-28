import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarchandAddComponent } from './marchand-add/marchand-add.component';
import { MarchandListComponent } from './marchand-list/marchand-list.component';
import { MarchandDetailsComponent } from './marchand-details/marchand-details.component';



const routes: Routes = [
  { path: 'partners', component: MarchandAddComponent },
  { path: ':id', component: MarchandDetailsComponent },
  { path: '', pathMatch: 'full', component: MarchandListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarchandRoutingModule { }
