import { Component, OnInit } from '@angular/core';
import {UserService} from '../../_services/user.service';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  thoughts: string = '';
  users = [];
  temp = {}

  constructor(
    private userService: UserService,
    public authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.loadAllUsers();
  }

  private loadAllUsers() {
    this.userService.getAll()
        .pipe(first())
        .subscribe(users => {
          this.users = users;
        });
}

  onPostClick() {

    this.temp = {
      post: this.thoughts
      // userId: '1',
      // userName: 'q',
      // postPhotoId: '',
      // postImageId: '',
      // isActive: true,
      // isAdmin: false,
      // profession: 'Doctor'
    }


    this.userService.posts(this.temp)
      .subscribe(
        data => {
          console.log('data', data)
        }
      );


    // this.authService.currentUser.subscribe(user => {
    //   user;
    //   this.userService.posts(user)
    // });
  }

}
