import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FbappPage } from 'src/app/shared/FbappPage';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Observable, of, Subscriber } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface DialogData {
  animal: string;
  name: string;
}

  @Component({
    selector: 'fbapp-profiles-dialog',
    templateUrl: './profiles-dialog.html',
  })
  export class ProfilesDialog implements OnInit,FbappPage {
    public pageTitle = 'Modifier les informations';

    constructor(
      public dialogRef: MatDialogRef<ProfilesDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,private readonly userService: UserService,private readonly router: Router,private readonly http: HttpClient) {}
      @ViewChild('register', { static: false }) registerInput: ElementRef;

      FormRegister: FormGroup;
      public firstName$!: Observable<string>;

      ngOnInit() : void {
        this.FormRegister = new FormGroup({
          'email': new FormControl(this.user.email,[
            Validators.required,
            Validators.email,
          ]),
          'pseudo': new FormControl(this.user.pseudo,[
            Validators.required,
          ]),
          'password': new FormControl('',[
          ]),


        }); // <-- add custom validator at the FormGroup level
      }
      get email() { return this.FormRegister.get('email'); }
      get pseudo() { return this.FormRegister.get('pseudo'); }
      get password() { return this.FormRegister.get('password'); }
      private goToHome(): void {
        this.router.navigateByUrl('/');
      }
      public goToFormPartenaire(): void {
        this.router.navigateByUrl('/partners');
      }


    public onSubmit(formDir): void {
        var formRes;
        if (formDir.value.password==''){
           formRes = {
            ...formDir.value,
          };
          delete formRes.password;
        }else {
           formRes = formDir.value;
        }
        this.userService.update(formRes,this.user._id);
        this.dialogRef.close();

    }

    onNoClick(): void {
      this.dialogRef.close();
    }

    public get user() {
      return this.userService.currentUser;
    }
  }
