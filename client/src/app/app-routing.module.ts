import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard.service';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'users', component: UserListComponent, canActivate: [AuthGuard]},
    { path: 'add', component: CreateUserComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
