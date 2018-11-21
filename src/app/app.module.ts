import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HotLabelComponent } from './hot-label/hot-label.component';
import { HotUserComponent } from './hot-user/hot-user.component';
import { HotArticleComponent } from './hot-article/hot-article.component';
import { BlogItemComponent } from './blog-item/blog-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HotLabelComponent,
    HotUserComponent,
    HotArticleComponent,
    BlogItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
