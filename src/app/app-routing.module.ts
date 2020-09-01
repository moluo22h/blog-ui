import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';

const appRoutes: Routes = [
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: 'home', loadChildren: './home/home.module#HomeModule'},
  {path: 'publish', loadChildren: './publish/publish.module#PublishModule'},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
