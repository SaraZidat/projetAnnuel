import { Component } from '@angular/core';
import { FbappPage } from './shared/FbappPage';
import { UserService } from './user/user.service';

@Component({
  selector: 'fbapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public activatedPageName = 'fbappapp';
  public constructor(private readonly userService: UserService) { }

  public get user() {

    //return JSON.parse(localStorage.getItem('user'))
    return this.userService.currentUser;
  }

  public onRouteActivated(activatedPage: FbappPage): void {
    this.activatedPageName = activatedPage.pageTitle;
  }

}
