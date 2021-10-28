import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarchandAddComponent } from './marchand-add/marchand-add.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { MarchandRoutingModule } from './marchand-routing.module';
import { MarchandListComponent } from './marchand-list/marchand-list.component';
import { MarchandThumbnailComponent } from './marchand-thumbnail/marchand-thumbnail.component';
import { SharedModule } from '../shared/shared.module';
import { MarchandDetailsComponent } from './marchand-details/marchand-details.component';
import { ProductModule } from '../product/product.module';



@NgModule({
  declarations: [MarchandAddComponent, MarchandListComponent, MarchandThumbnailComponent, MarchandDetailsComponent,],
  imports: [
    CommonModule,
    MarchandRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ProductModule
  ],

})
export class MarchandModule { }
