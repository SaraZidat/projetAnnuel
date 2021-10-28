import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FbappPage } from 'src/app/shared/FbappPage';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'fbapp-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit,FbappPage {

  public pageTitle = 'Créer un compte';
  @ViewChild('register', { static: false }) registerInput: ElementRef;


  FormRegister: FormGroup;
  public firstName$!: Observable<string>;

  constructor(private readonly userService: UserService,private readonly router: Router,private readonly http: HttpClient,private readonly changeDetectionRef: ChangeDetectorRef) { }

  ngOnInit() : void {
    this.FormRegister = new FormGroup({
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
      'age': new FormControl('',[
        Validators.required,

      ]),


    }); // <-- add custom validator at the FormGroup level
  }
  get email() { return this.FormRegister.get('email'); }
  get pseudo() { return this.FormRegister.get('pseudo'); }
  get password() { return this.FormRegister.get('password'); }
  get age() { return this.FormRegister.get('age'); }
  private goToHome(): void {
    this.router.navigateByUrl('/');
  }
  public goToFormPartenaire(): void {
    this.router.navigateByUrl('/partners');
  }


    public onSubmit(formDir): void {
      const formRes = {
        pseudo:formDir.value.pseudo,
        email: formDir.value.email,
        password: formDir.value.password,
        previousOrders: [],
        age: formDir.value.age.toISOString()
        .split("T")[0],
        createDate: new Date().toISOString()
        .split("T")[0],
      };
      /*const valuet ={
        email: formRes.email,
        password: formRes.password,
        pseudo: formRes.pseudo,
        createDate: new Date().toISOString()
        .split("T")[0],
        age: 26
      };*/
      //this.doOCR(formRes.age);
      console.log(formRes)
      this.userService.create(formRes);
      this.goToHome();
    }


}
