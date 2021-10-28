import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MarchandService } from '../marchand.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FbappPage } from 'src/app/shared/FbappPage';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'fbapp-marchand-add',
  templateUrl: './marchand-add.component.html',
  styleUrls: ['./marchand-add.component.scss']
})
export class MarchandAddComponent implements OnInit,FbappPage {
  public pageTitle = 'Créer un Partenariat';
  marchands: Array<any>;
  newmarchand: any;
  requesting: boolean;
  FormMarchand: FormGroup;
  public marchandName$!: Observable<string>;

  constructor(private readonly marchandService: MarchandService,private readonly router: Router,private readonly http: HttpClient) { }

  ngOnInit() : void {
    this.FormMarchand = new FormGroup({
      'email': new FormControl('',[
        Validators.required,
        Validators.email,
      ]),
      'password': new FormControl('',[
        Validators.required,
        Validators.minLength(4),
      ]),
      'name': new FormControl('',[
        Validators.required,
      ]),


    });
    this.requesting = false;
  }
  get email() { return this.FormMarchand.get('email'); }
  get name() { return this.FormMarchand.get('name'); }
  get password() { return this.FormMarchand.get('password'); }
  private goToHome(): void {
    this.router.navigateByUrl('/');
  }
  public onSubmit(formDir): void {

    const formRes = {
      ...formDir.value,
      createDate: new Date().toISOString()
      .split("T")[0],
    }
    this.marchandService.add(formRes);
      this.goToHome();
  };

}

