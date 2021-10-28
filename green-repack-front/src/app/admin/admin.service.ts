import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import { AdminModel } from './AdminModel';
import { HttpClient } from '@angular/common/http';
import { Admin } from './Admin';
import { AdminShape } from './AdminShape';


@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private authenticatedAdmin!: Admin;
  //uri = 'http://localhost:3000';
  uri = 'https://projet-annuel-node.herokuapp.com';

  public constructor(private readonly httpClient: HttpClient) {}

  public get currentAdmin() {
    return this.authenticatedAdmin=JSON.parse(localStorage.getItem('admin'));
  }
  public authenticate(email: string, password: string) {
    const body = { email, password };
    console.log(body);
    return this.httpClient.post(`${this.uri}/api/auth/admins`, body).pipe(
      map(Admin.NEW),
      tap(admin => {
        localStorage.setItem('admin', JSON.stringify(admin));
        this.authenticatedAdmin = admin;
      }));
  }
  public create(adminCreate: AdminModel) {
    return this.httpClient.post(`${this.uri}/api/admins`, adminCreate);
  }
  public update(adminCreate: AdminModel,_id: number) {
    return this.httpClient.patch<AdminShape>(`${this.uri}/api/admins/${_id}`, adminCreate)
    .subscribe((admin) => {
      return this.authenticatedAdmin = admin;
    });
  }

  public logout(): void {
            // remove admin from local storage and set current admin to null
    localStorage.removeItem('admin');
    this.authenticatedAdmin = null;
  }


}
