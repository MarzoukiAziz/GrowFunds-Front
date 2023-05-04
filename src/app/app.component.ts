import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';
import { User } from './models/User';

@Component({
  selector: 'body',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit{
  title = 'GrowFunds-Front';
  api_url="http://localhost:1004/";

  private roles!: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username !: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user : User |null = this.tokenStorageService.getUser();
      if (user) {
      //this.roles = user.roles;

      //this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      //this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }
  
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
