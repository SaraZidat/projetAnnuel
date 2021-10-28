import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FbappPage } from 'src/app/shared/FbappPage';
import { MarchandService } from '../marchand.service';
import { Marchand} from '../Marchand';
import { Router } from '@angular/router';

import { DataLoaderService } from 'src/app/shared/data-loader.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  templateUrl: './marchand-list.component.html',
  styleUrls: ['./marchand-list.component.scss'],
  providers: [DataLoaderService],
})
export class MarchandListComponent implements OnInit, FbappPage {
  public readonly pageTitle = 'Liste des marchands';
  public readonly filterPlaceholder = 'Filtrer par nom';
  public marchands$: Observable<Marchand[]>;

  public filterInput!: string;
  constructor(
    private readonly marchandService: MarchandService,
    private readonly marchandsLoaderService: DataLoaderService<Marchand[]>,
    private readonly userService: UserService,
    private router: Router

  ) { }

  ngOnInit() {

    this.initMarchandsLoader();

    this.listMarchands();

  }
  public onFilter(): void {
    this.marchandsLoaderService.transform(marchands => {

      return marchands.filter(marchand => {
        return marchand.nameStartsWith(this.filterInput);
      });
    });
  }
  public reset(): void {
    this.marchandsLoaderService.reset();
    this.filterInput = '';
  }
  public onSelectMarchand(marchandId: string): void {
    this.router.navigateByUrl("/marchands/"+marchandId);


  private initMarchandsLoader(): void {
    const marchands$ = this.listMarchands();
    this.marchandsLoaderService.init(marchands$);
    this.marchands$ = this.marchandsLoaderService.stream$;
  }

  private listMarchands(): Observable<Marchand[]>{

    return this.marchandService.getListMarchandValide();
  }
}
