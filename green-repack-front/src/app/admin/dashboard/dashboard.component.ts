import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import {AdminService } from '../admin.service';
import { FbappPage } from 'src/app/shared/FbappPage';
import { MarchandService } from '../../marchand/marchand.service';
import { Marchand} from '../../marchand/Marchand';
import { Router } from '@angular/router';

import { DataLoaderService } from 'src/app/shared/data-loader.service';


@Component({
  selector: 'fbapp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DataLoaderService],
})
export class DashboardComponent implements OnInit {

  public readonly pageTitle = 'Liste des marchands en attente de validation';
  public marchands$: Observable<Marchand[]>;

  public filterInput!: string;
  constructor(
    private readonly marchandService: MarchandService,
    private readonly marchandsLoaderService: DataLoaderService<Marchand[]>,
    private readonly adminService: AdminService,
    private router: Router

  ) { }

  ngOnInit() {

    this.initMarchandsLoader();

    this.listMarchands();

  }
  public reset(): void {
    this.marchandsLoaderService.reset();
    this.filterInput = '';
  }

  private initMarchandsLoader(): void {
    const marchands$ = this.listMarchands();
    this.marchandsLoaderService.init(marchands$);
    this.marchands$ = this.marchandsLoaderService.stream$;
  }

  private listMarchands(): Observable<Marchand[]>{

    return this.marchandService.getListMarchandInvalide();
  }
  public isValid(marchand:Marchand){

    this.marchands$=this.marchandService.ValidateMarchand(marchand);

  }
}



