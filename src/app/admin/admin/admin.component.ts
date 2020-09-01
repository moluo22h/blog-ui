import {Component, OnInit} from '@angular/core';
import {AdminService} from '../admin.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: User[];

  constructor(private adminService: AdminService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.adminService.getUsers().subscribe((next) => {
      console.log(next);
      this.users = next;
    });
  }

}

export class User {
  id: string;
  userName: string;
  email: string;
  createTime: string;
}
