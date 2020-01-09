import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import { UserModel } from '../user/user/UserModel';
import { HttpClient } from '@angular/common/http';
import { User } from './User';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private authenticatedUser!: User;
  uri = 'http://localhost:3000';
  public constructor(private readonly httpClient: HttpClient) {}

  public get currentUser() {
    return this.authenticatedUser;
  }
  public authenticate(email: string, password: string) {
    const body = { email, password };

    return this.httpClient.post(`${this.uri}/api/auth/users`, body).pipe(
      map(User.NEW),
      tap(user => {
        this.authenticatedUser = user;
      }));
  }
  public create(userCreate: UserModel) {
    return this.httpClient.post(`${this.uri}/api/users`, userCreate)
      .subscribe(user => {

      });
  }

  public logout(): void {
    this.authenticatedUser = null;
  }


}
