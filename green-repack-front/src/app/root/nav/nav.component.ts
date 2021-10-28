import { Component, OnInit,Input } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'fbapp-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() public pageName!: string;
  public filterInput!: string;

  constructor(private readonly userService: UserService,private readonly router: Router) { }

  ngOnInit() {
  }

  public get user() {
    return this.userService.currentUser;
  }
  public logout() {
    this.userService.logout();
    this.goToHome();
    return null;
  }
  private goToHome(): void {
    this.router.navigateByUrl('/');
  }

}

