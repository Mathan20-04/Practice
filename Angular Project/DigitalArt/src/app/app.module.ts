import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './module/components/login/login.component';
import { HeaderComponent } from './module/components/header/header.component';
import { DetailComponent } from './module/components/detail/detail.component';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CollectionComponent } from './module/components/collection/collection.component';
import { FileuploadComponent } from './module/components/fileupload/fileupload.component';
import { SearchComponent } from './module/components/search/search.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DetailComponent,
    CollectionComponent,
    FileuploadComponent,
    SearchComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        DragDropModule,
        HttpClientModule,
        CommonModule,
        ReactiveFormsModule,
        MatStepperModule,
        MatFormFieldModule,
        FormsModule,
        MatTableModule,
        MatIconModule,
        MatProgressSpinnerModule,
        InfiniteScrollModule
    ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
