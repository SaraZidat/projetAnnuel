import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FbappPage } from 'src/app/shared/FbappPage';
import { DrinkService } from '../drink.service';
import { DrinkModel } from '../DrinkModel';
import { Drink } from '../Drink.entity';
import { DataLoaderService } from 'src/app/shared/data-loader.service';
//import { UserService } from 'src/app/user/user.service';


@Component({
  selector: 'fbapp-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent implements OnInit, FbappPage {
  public readonly pageTitle = 'Liste des Boissons';
  public drinks$: Observable<Drink[]>;
  constructor(
    private readonly drinkService: DrinkService,
    private readonly barsLoaderService: DataLoaderService<Drink[]>,
    //private readonly userService: UserService,

  ) { }

  ngOnInit() {


    this.initDrinksLoader();
    this.getListsDrink();

  }
  private getListsDrink(): Observable<Drink[]>{
    return this.drinkService.getListDrink();
  }
  private initDrinksLoader(): void {
    const drinks$ = this.getListsDrink();
    this.barsLoaderService.init(drinks$);
    this.drinks$ = this.barsLoaderService.stream$;
  }
  public onSelectDrink(drink: Drink): void {
    /*if (this.userService.currentUser) {
      this.userService.addFavoriteCharacter(character.id).subscribe(() => {
        this.favoriteCharacterId = character.id;
      });
    }*/
  }
}
