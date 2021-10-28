import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

import { SharedModule } from '../shared/shared.module';
import { UserModule } from '../user/user.module';
import { MarchandModule } from '../marchand/marchand.module';
import { RootRoutingModule } from './root-routing.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import {MatTabsModule} from '@angular/material/tabs';
import { LoginComponent } from './../user/login/login.component';
import { RegisterComponent } from './../user/register/register.component';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [HomeComponent, NavComponent, FooterComponent ],
  imports: [
    SharedModule,
    RootRoutingModule,
    UserModule,
    MarchandModule,
    MatTabsModule,
    MatIconModule

  ],
  exports: [NavComponent, FooterComponent],

})
export class RootModule { }
