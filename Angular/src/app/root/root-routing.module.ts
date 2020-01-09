import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from '../user/register/register.component';

import { LoginComponent } from '../user/login/login.component';



const routes: Routes = [{ path: '', component: HomeComponent },
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
