import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGaurdService } from './service/route-gaurd.service';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { ErrorComponent } from './error/error.component';
import { DateComponent } from './date/date.component';


const routes: Routes = [
  {path :"", component : LoginComponent}, //default component or page
  {path :"login", component : LoginComponent}, //login component
  {path :"register", component : RegisterComponent},
  {path : "dashboard", component : DashboardComponent}, //dashboard component
  {path :"user-list", component : UserListComponent},
  {path :"user/:id", component : UserComponent},
  {path : "logout", component : LogoutComponent},
  {path : "date", component : DateComponent},

  {path : '**', component :ErrorComponent}//for errors 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
