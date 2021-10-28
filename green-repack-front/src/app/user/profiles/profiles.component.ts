import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FbappPage } from 'src/app/shared/FbappPage';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProfilesDialog } from './profiles-dialog';


@Component({
  selector: 'fbapp-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
  public pageTitle = 'Informations personnelles';
  constructor(private readonly userService: UserService,public dialog: MatDialog) { }
  ngOnInit() {}

  public get user() {
    return this.userService.currentUser;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ProfilesDialog, {
      width: '40vw',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  /*FormUser: FormGroup;

  constructor() { }

  ngOnInit() : void {
    this.FormUser = new FormGroup({
      'email': new FormControl('',[
        Validators.required,
        Validators.email,
      ]),
      'pseudo': new FormControl('',[
        Validators.required,
      ]),
      'password': new FormControl('',[
        Validators.required,
        Validators.minLength(4),
      ]),


    }); // <-- add custom validator at the FormGroup level
  }
  get email() { return this.FormUser.get('email'); }
  get pseudo() { return this.FormUser.get('pseudo'); }
  get password() { return this.FormUser.get('password'); }

  public onSubmit(formDir): void {

    const formRes = formDir.value;
    //this.doOCR(formRes.age);
    //this.userService.create(formRes);
    }
  */
  }
