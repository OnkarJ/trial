import { Component, OnInit, ɵConsole } from '@angular/core';
import { User } from '../../../_models/user';
import { AuthenticationService } from '../../../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menuItems = [];
  currentUser: User;
  isAuthenticated;

  constructor(private router: Router, private authenticationService: AuthenticationService ){
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.isAuthenticated = this.currentUser ? true : false;
  }

  ngOnInit(): void {

    

    this.menuItems = [
      {
        key: 'register',
        value: 'Register',
        isLoggedIn: !this.isAuthenticated,
        route: '/register'
      },
      {
        key: 'login',
        value: 'Login',
        isLoggedIn: !this.isAuthenticated,
        route: '/login'
      },
      {
        key: 'home',
        value: 'Home',
        isLoggedIn: this.isAuthenticated,
        route: '/'
      },
      {
        key: 'network',
        value: 'Network',
        isLoggedIn: this.isAuthenticated,
        route: '/network'
      },
      {
        key: 'friends',
        value: 'Friends',
        isLoggedIn: this.isAuthenticated,
        route: '/friends'
      },
      {
        key: 'settings',
        value: 'Settings',
        isLoggedIn: this.isAuthenticated,
        route: '/settings'
      },
      {
        key: 'logout',
        value: 'Logout',
        isLoggedIn: this.isAuthenticated,
        route: '/logout'
      }
    ];
  }

  onTabClick(menu) {
    if(menu.route === "/logout") {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
    }
  }

}
