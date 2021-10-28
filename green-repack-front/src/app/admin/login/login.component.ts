import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FbappPage } from 'src/app/shared/FbappPage';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'fbapp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,FbappPage {
  public pageTitle = 'Se connecter (en tant qu\'Admin)';
  @ViewChild('login', { static: false }) loginInput: ElementRef;
  public firstName$!: Observable<string>;
  FormLogin: FormGroup;
  constructor(private readonly adminService: AdminService,private readonly router: Router,private readonly http: HttpClient) { }

  ngOnInit() : void {
    this.FormLogin = new FormGroup({
      'email': new FormControl('',[
        Validators.required,
        Validators.email,

      ]),
      'password': new FormControl('',[
        Validators.required,
      ]),
    }); // <-- add custom validator at the FormGroup level
  }
  get email() { return this.FormLogin.get('email'); }

  get password() { return this.FormLogin.get('password'); }
  private goToHome(): void {
    this.router.navigateByUrl('/admin/dashboard');
  }
  public onSubmit(formDir): void {

    const { email, password } = formDir.value;
    /*this.authService.authenticate(email, password).subscribe(admin=>{

    })*/console.log(formDir.value);
    this.firstName$=this.adminService.authenticate(email, password).pipe(
      map((admin) => {
        //localStorage.setItem("admin",JSON.stringify(admin));
        //localStorage.removeItem("admin")
        //localStorage.getItem("admin")
        console.log(admin);
        this.goToHome();
        return null;
      }),
      catchError(() => {
        this.resetForm(formDir);
        return of('Login failed');
      }),
    );
  }
  private resetForm(formDir: NgForm): void {
    formDir.reset();
    this.loginInput.nativeElement.focus();
  }


}

