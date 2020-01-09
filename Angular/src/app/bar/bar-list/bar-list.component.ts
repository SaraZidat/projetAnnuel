import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FbappPage } from 'src/app/shared/FbappPage';
import { BarService } from '../bar.service';
import { Bar} from '../Bar';

import { DataLoaderService } from 'src/app/shared/data-loader.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  templateUrl: './bar-list.component.html',
  styleUrls: ['./bar-list.component.scss'],
  providers: [DataLoaderService],
})
export class BarListComponent implements OnInit, FbappPage {
  public readonly pageTitle = 'Liste des bars';
  public readonly filterPlaceholder = 'Filtrer par nom';
  public bars$: Observable<Bar[]>;

  public filterInput!: string;
  constructor(
    private readonly barService: BarService,
    private readonly barsLoaderService: DataLoaderService<Bar[]>,
    private readonly userService: UserService,

  ) { }

  ngOnInit() {

    this.initBarsLoader();

    this.listBars();

  }
  public onFilter(): void {
    this.barsLoaderService.transform(bars => {

      return bars.filter(bar => {
        return bar.nameStartsWith(this.filterInput);
      });
    });
  }
  public reset(): void {
    this.barsLoaderService.reset();
    this.filterInput = '';
  }
  public onSelectBar(bar: Bar): void {
    /*if (this.userService.currentUser) {
      this.userService.addFavoriteCharacter(character.id).subscribe(() => {
        this.favoriteCharacterId = character.id;
      });
    }*/
  }

 /* private initFavoriteCharaterId(): void {
    const { currentUser } = this.userService;
    if (currentUser) {
      this.favoriteCharacterId = currentUser.favoriteCharacter;
    }
  }
*/
  private initBarsLoader(): void {
    const bars$ = this.listBars();
    this.barsLoaderService.init(bars$);
    this.bars$ = this.barsLoaderService.stream$;
  }

  private listBars(): Observable<Bar[]>{

    return this.barService.getList();
  }
}
