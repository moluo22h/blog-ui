import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {RouterModule, Routes} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginService} from './login.service';
import {HttpModule} from '@angular/http';


const loginRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(loginRoutes)
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule {
}
