import { Injectable } from '@angular/core';
import { BarModel } from './bar-add/BarModel';
import { Bar } from './Bar';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BarService {
  uri = 'https://projet-annuel-node.herokuapp.com';

  constructor(private readonly httpClient: HttpClient) { }
  public add(BarCreate: BarModel){
    console.log(BarCreate);
    return this.httpClient.post(`${this.uri}/api/bars`, BarCreate)
      .subscribe(bar => {
        console.log(bar);

      });
  }
  public getList(): Observable<any[]>{
    return this.httpClient.get(`${this.uri}/api/bars`).pipe(map(Bar.NEW_BUNCH));

  }
}
