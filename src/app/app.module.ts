 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TaskSComponent } from './components/task-s/task-s.component';

import{ HttpClient, HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

 @NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TaskSComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
