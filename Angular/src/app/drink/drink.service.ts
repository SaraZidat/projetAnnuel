import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,tap } from 'rxjs/operators';
import { pipe, Observable } from 'rxjs';
import { DrinkModel } from './DrinkModel';
import { Drink } from './Drink.entity';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  uri = 'https://projet-annuel-node.herokuapp.com';
  private Drink!: DrinkModel;
  constructor(private readonly httpClient: HttpClient) { }

  public getListDrink(): Observable<Drink[]>{
    return this.httpClient.get(`${this.uri}/api/drinks`).pipe(map(Drink.NEW_BUNCH));

  }
  public find(idDrink){
    return this.httpClient.get<DrinkModel>(`${this.uri}/api/drinks/`+idDrink);

    //return this.requestDrink(idDrink).pipe(map(Drink.NEW));

  }
  public requestDrink(idDrink):Observable<DrinkModel>{
    return this.httpClient.get<DrinkModel>(`${this.uri}/api/drinks/`+idDrink);

  }

}

