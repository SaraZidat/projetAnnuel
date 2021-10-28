import { Injectable } from '@angular/core';
import { MarchandModel } from './marchand-add/MarchandModel';
import { Marchand } from './Marchand';
import { MarchandShape } from './MarchandShape';

import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { map, switchMap,tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarchandService {
  uri = 'https://projet-annuel-node.herokuapp.com';
  //uri = 'http://localhost:3000';
  constructor(private readonly httpClient: HttpClient) { }
  public add(MarchandCreate: MarchandModel){
    return this.httpClient.post(`${this.uri}/api/marchands`, MarchandCreate)
      .subscribe(marchand => {
        console.log(marchand);

      });
  }
  public getList(): Observable<MarchandShape[]>{
    return this.httpClient.get<MarchandShape[]>(`${this.uri}/api/marchands`);

  }
  public getListMarchandInvalide(): Observable<any[]>{
    return this.getList().pipe(
      map((marchands:Marchand[])=>{
        const marchandsNotValidate =marchands.filter(obj=>
          obj.isValidate!=true
        );
        return Marchand.NEW_BUNCH(marchandsNotValidate);
    }))
  }
  public getListMarchandValide(): Observable<Marchand[]>{
    return this.getList().pipe(
      map((marchands:Marchand[])=>{
        const marchandsNotValidate =marchands.filter(obj=>
          obj.isValidate==true
        );
        return Marchand.NEW_BUNCH(marchandsNotValidate);
    }))
  }

  public findOne(MarchandId: string): Observable<Marchand>{
    return this.httpClient.get<Marchand>(`${this.uri}/api/marchands/${MarchandId}`);

  }
  public ValidateMarchand(marchand:Marchand): Observable<Marchand[]>{
    this.updateValidateMarchand(marchand);
    return this.getListMarchandInvalide();

  }
  public updateValidateMarchand(marchand:Marchand){
    console.log(`${this.uri}/api/marchands/${marchand._id}`,{"isValidate": true})
    this.httpClient.patch(`${this.uri}/api/marchands/${marchand._id}`,{"isValidate": true}).subscribe((marchand)=>{ return marchand});

  }

}
