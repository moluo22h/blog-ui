import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import {LoginComponent} from '../login/login/login.component';
import {RegisterComponent} from '../login/register/register.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {PublishService} from '../publish/publish.service';
import {AdminService} from './admin.service';


const adminRoutes: Routes = [
  {path: '', component: AdminComponent},
];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(adminRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
