import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {HotLabelComponent} from './hot-label/hot-label.component';
import {HotArticleComponent} from './hot-article/hot-article.component';
import {BlogItemComponent} from './blog-item/blog-item.component';
import {HotUserComponent} from './hot-user/hot-user.component';
import {RouterModule, Routes} from '@angular/router';

const homeRoutes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  declarations: [
    HomeComponent,
    HotLabelComponent,
    HotUserComponent,
    HotArticleComponent,
    BlogItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ]
})
export class HomeModule {
}
