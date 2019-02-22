import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { AppRoutingModule } from './app-routing.module';
import {NotifierModule} from 'angular-notifier';
import {HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './auth.guard.service';





@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UserDetailsComponent,
    UserListComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NotifierModule,

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})


export class AppModule { }
