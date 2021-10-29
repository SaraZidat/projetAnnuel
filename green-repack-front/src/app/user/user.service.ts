import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import { UserModel } from './UserModel';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
import { UserShape } from './UserShape';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private authenticatedUser!: User;
  //uri = 'http://localhost:4200';
  uri = 'https://projet-annuel-node.herokuapp.com';

  public constructor(private readonly httpClient: HttpClient) {}

  public get currentUser() {
    return this.authenticatedUser=JSON.parse(localStorage.getItem('user'));
  }
  public authenticate(email: string, password: string) {
    const body = { email, password };
    console.log(body);
    return this.httpClient.post(`${this.uri}/api/auth/users`, body).pipe(
      map(User.NEW),
      tap(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.authenticatedUser = user;
      }));
  }
  public create(userCreate: UserModel) {
    console.log(userCreate)
    return this.httpClient.post(`${this.uri}/api/users`, userCreate).subscribe((user) => {return null;});;
  }
  public update(userCreate: UserModel,_id: number) {
    return this.httpClient.patch<UserShape>(`${this.uri}/api/users/${_id}`, userCreate)
    .subscribe((user) => {

      localStorage.setItem('user', JSON.stringify(user));
      return this.authenticatedUser = user;
    });
  }

  public logout(): void {
            // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.authenticatedUser = null;
  }


}
