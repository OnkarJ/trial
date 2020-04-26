import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { UserRegistrationComponent } from './common/components/user-registration-form/user-registration.component';
import { LoginComponent } from './common/components/login-form/login.component';
import { ErrorRouteComponent } from './common/components/error-route/error-route.component';
import { ForgetPasswordComponent } from './common/components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './common/components/reset-password/reset-password.component';
import { HomeComponent } from './user/home/home.component';
import { SideBarComponent } from './common/components/side-bar/side-bar.component';
import { NetworkComponent } from './user/network/network.component';
import { FriendsComponent } from './user/friends/friends.component';
import { SettingsComponent } from './user/settings/settings.component';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { AlertComponent } from './alert/alert.component'
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './common/components/users-list/users-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserRegistrationComponent,
    LoginComponent,
    ErrorRouteComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    HomeComponent,
    SideBarComponent,
    NetworkComponent,
    FriendsComponent,
    SettingsComponent,
    AlertComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
