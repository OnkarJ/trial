import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
