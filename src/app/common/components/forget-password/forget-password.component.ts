import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../_services/authentication.service';
import { AlertService } from '../../../_services/alert.service';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  forgetFasswordForm: FormGroup;
  loading = false;
  submitted = false;
  currentUser: User;
  users = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private userService: UserService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.forgetFasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required]
    });
  }

  private loadAllUsers() {
    console.log('inside method')
    this.userService.getAll()
        .pipe(first())
        .subscribe(x => {
          console.log('x', x)
        }
        );
}

  get f() { return this.forgetFasswordForm.controls; }

  onSubmit() {

    console.log('forgetFasswordForm', this.forgetFasswordForm)

    // this.submitted = true;
    // this.alertService.clear();

    // if (this.forgetFasswordForm.invalid) {
    //   return;
    // }

    // this.loading = true;
    // if(this.forgetFasswordForm.value.username === "") {
      
    // }

  }

}
