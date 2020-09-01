import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {LoginService} from './login.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


const loginRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(loginRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    LoginService
  ],
  exports: [RegisterComponent, LoginComponent]
})
export class LoginModule {
}
