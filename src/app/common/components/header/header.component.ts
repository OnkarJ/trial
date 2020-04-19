import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menuItems = [];

  constructor() { }

  ngOnInit(): void {

    const isAuthenticated = true;

    this.menuItems = [
      {
        key: 'register',
        value: 'Register',
        isLoggedIn: !isAuthenticated,
        route: '/user/registration'
      },
      {
        key: 'login',
        value: 'Login',
        isLoggedIn: !isAuthenticated,
        route: '/login'
      },
      {
        key: 'home',
        value: 'Home',
        isLoggedIn: isAuthenticated,
        route: '/home'
      },
      {
        key: 'network',
        value: 'Network',
        isLoggedIn: isAuthenticated,
        route: '/network'
      },
      {
        key: 'friends',
        value: 'Friends',
        isLoggedIn: isAuthenticated,
        route: '/friends'
      },
      {
        key: 'settings',
        value: 'Settings',
        isLoggedIn: isAuthenticated,
        route: '/settings'
      },
      {
        key: 'logout',
        value: 'Logout',
        isLoggedIn: isAuthenticated,
        route: '/login'
      }
    ];
  }

}
