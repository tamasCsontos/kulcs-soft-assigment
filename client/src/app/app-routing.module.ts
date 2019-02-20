import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { RegisterUserComponent } from './create-user/register-user.component';

const routes: Routes = [
    { path: '', redirectTo: 'add', pathMatch: 'full' },
    { path: 'users', component: UserListComponent },
    { path: 'add', component: RegisterUserComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
