import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './module/components/login/login.component';
import {HeaderComponent} from './module/components/header/header.component';
import {DetailComponent} from './module/components/detail/detail.component';
import {CollectionComponent} from './module/components/collection/collection.component';
import {FileuploadComponent} from './module/components/fileupload/fileupload.component';
import {SearchComponent} from './module/components/search/search.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'fileupload', component: FileuploadComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
