import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BarService } from '../bar.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FbappPage } from 'src/app/shared/FbappPage';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'fbapp-bar-add',
  templateUrl: './bar-add.component.html',
  styleUrls: ['./bar-add.component.scss']
})
export class BarAddComponent implements OnInit,FbappPage {
  public pageTitle = 'Créer un Partenariat';
  bars: Array<any>;
  newbar: any;
  requesting: boolean;
  FormBar: FormGroup;
  public barName$!: Observable<string>;

  constructor(private readonly barService: BarService,private readonly router: Router,private readonly http: HttpClient) { }

  ngOnInit() : void {
    this.FormBar = new FormGroup({
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
      'webSite': new FormControl('',[

      ]),

    }); // <-- add custom validator at the FormGroup level
    this.requesting = false;
  }
  get email() { return this.FormBar.get('email'); }
  get name() { return this.FormBar.get('name'); }
  get webSite() { return this.FormBar.get('website'); }
  get password() { return this.FormBar.get('password'); }
  private goToHome(): void {
    this.router.navigateByUrl('/');
  }
  public onSubmit(formDir): void {

    const formRes = {
      ...formDir.value,
      createDate: new Date().toISOString()
      .split("T")[0],
    }
    this.barService.add(formRes);
      this.goToHome();
  };

}

