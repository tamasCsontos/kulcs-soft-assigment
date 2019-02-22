import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const name = form.value.name;
    const password = form.value.password;
    this.userService.signinUser(name, password);
  }

}
