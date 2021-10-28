import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Register2Component } from './register-bis/register2.component';
import { APP_DATE_FORMATS, AppDateAdapter } from '../shared/format-datepicker';
import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
import { MatFormFieldModule,
  MatMenuModule,
  MatCheckboxModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule } from '@angular/material';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfilesDialog } from './profiles/profiles-dialog';


@NgModule({
  declarations: [LoginComponent, Register2Component, RegisterComponent, ProfilesComponent,ProfilesDialog],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  entryComponents: [
    ProfilesDialog
  ],
  providers: [
    MatDatepickerModule,
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ],
})
export class UserModule { }
