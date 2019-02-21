import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { UserListComponent } from '../user-list/user-list.component';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: User;

  constructor(private userService: UserService, private listComponent: UserListComponent,
              private notifierService: NotifierService) { }

  ngOnInit() {
  }



  deleteUser() {
    this.notifierService.notify( 'success', 'You deleted the user!' );
    this.userService.deleteUser(this.user.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }
}
