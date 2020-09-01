import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublishComponent} from './publish/publish.component';
import {RouterModule, Routes} from '@angular/router';
import {FileUploadModule} from 'ng2-file-upload';
import {LoginService} from '../login/login.service';
import {PublishService} from './publish.service';
import {HttpClientModule} from '@angular/common/http';

const pulishRoutes: Routes = [
  {path: '', component: PublishComponent}
];


@NgModule({
  declarations: [PublishComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(pulishRoutes),
    FileUploadModule
  ],
  providers: [
    PublishService
  ]
})
export class PublishModule {
}
