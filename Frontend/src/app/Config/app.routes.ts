import { Routes } from '@angular/router';
import { HomeMainComponent } from '../Components/HomePage/home-main/home-main.component';
import { Error404Component } from '../Components/Utils/error404/error404.component';
import { SignupComponent } from '../Components/Authentication/signup/signup.component';
import { LoginComponent } from '../Components/Authentication/login/login.component';
import { DashboardMainComponent } from '../Components/Dashboard/dashboard-main/dashboard-main.component';
import { AuthGuard } from '../Guards/auth.guard';

export const routes: Routes = [
    {path:'home', component:HomeMainComponent},
    {path:'signup', component:SignupComponent},
    {path:'login', component:LoginComponent},
    {path:'dashboard', component:DashboardMainComponent, canActivate:[AuthGuard]},
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:'**', component:Error404Component}
];
