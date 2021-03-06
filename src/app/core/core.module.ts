import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {LoginModule} from '../login/login.module';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LoginModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class CoreModule {
}
