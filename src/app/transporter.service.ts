import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { userList } from 'src/mock-db';
import { userInfo } from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class TransporterService {

  constructor() { }

  getUserList():Observable<userInfo[]>{
    let users = of(userList);
    return users;
  }
}

