import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserRegistrationComponent } from './common/components/user-registration-form/user-registration.component';
import { LoginComponent } from './common/components/login-form/login.component';
import { ErrorRouteComponent } from './common/components/error-route/error-route.component';
import { ForgetPasswordComponent } from './common/components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './common/components/reset-password/reset-password.component';
import { HomeComponent } from './user/home/home.component';
import { NetworkComponent } from './user/network/network.component';
import { FriendsComponent } from './user/friends/friends.component';
import { SettingsComponent } from './user/settings/settings.component';

const routes: Routes = [
    {
        path:'user/registration',
        component: UserRegistrationComponent
    },
    {   path:'login',
        component: LoginComponent
    },
    {   path:'forget-password',
        component: ForgetPasswordComponent
    },
    {   path:'reset-password',
        component: ResetPasswordComponent
    },
    {   path:'home',
        component: HomeComponent
    },
    {   path:'network',
        component: NetworkComponent
    },
    {   path:'friends',
        component: FriendsComponent
    },
    {   path:'settings',
        component: SettingsComponent
    },
    {   path:'**',
        component: ErrorRouteComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }