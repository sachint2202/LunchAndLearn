import { Component, OnInit } from '@angular/core';
import { userInfo } from 'src/models';
import { TransporterService } from '../transporter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:userInfo[] = [];
  homeHeading: string = 'Users List';

  constructor(private transporter: TransporterService) { }

  getUsers(){
    this.transporter.getUserList().subscribe(val => this.users = val)
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
