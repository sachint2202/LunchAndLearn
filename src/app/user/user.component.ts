import { Component, OnInit } from '@angular/core';
import { TransporterService } from '../transporter.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userHeading:string = 'User Details';
  alertOn = false;
  alertmsg = '';

  constructor(private transporter: TransporterService) { }

  ngOnInit(): void {
  }
  onSubmit(data: any){
    console.log(data);
this.transporter.saveUsers(data).subscribe(val => {this.myalert('User added successfully')});
  }
  myalert(msg: string){
    this.alertOn=true;
    this.alertmsg = msg;
    const this$ = this;
    setTimeout(function(){this$.alertOn = false;},3000);
  }

}
