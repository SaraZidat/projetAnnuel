import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserAuth } from './UserAuth';
import moment from 'moment';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private resourcePath = '/api/auth/users';

  public constructor(private readonly httpClient: HttpClient) {}


    private setSession(authResult) {
      const expiresAt = moment().add(authResult.expiresIn,'second');

      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }
  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }
  isLoggedOut() {
      return !this.isLoggedIn();
  }
  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }
  public getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
}
}
