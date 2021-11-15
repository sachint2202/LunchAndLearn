import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { userList } from 'src/mock-db';
import { userInfo } from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class TransporterService {

  constructor() { }
  localUserList = [
    { Id: 11, Name: 'Dr Nice', Gender:'Male',EmpID:123, Designation:'SE' },
    { Id: 12, Name: 'Narco', Gender:'Male',EmpID:124, Designation:'Dir' },
    { Id: 13, Name: 'Alice', Gender:'Female',EmpID:125, Designation:'Analyst' },
    { Id: 14, Name: 'Fairy', Gender:'Female',EmpID:126, Designation:'IT' },
    { Id: 15, Name: 'Magneto', Gender:'Male',EmpID:127, Designation:'PE' },
    
  ];

  getUserList():Observable<userInfo[]>{
    let users = of(this.localUserList);
    return users;
  }

  getUserById(id: number):Observable<any>{
    let ind = -1;
    for(let i=0;i<this.localUserList.length;i++){
      if(this.localUserList[i].Id==id){
        ind = i;
        break;
      }
    }
    let user;
    if(ind>=0){
     user = (this.localUserList[ind]); 
  }
  return of(user);
    
  }

  saveUsers(data: any):Observable<number>
  {
   console.log(data);
  
    let maxUserId = -1;
    for(let i=0;i<this.localUserList.length;i++){
      if(this.localUserList[i].Id>maxUserId)
      maxUserId = this.localUserList[i].Id;
    } 

    const param = {
      'Id':maxUserId + 1,
      'Name':data.name,
      'Gender':data.gender,
      'EmpID':data.empId,
      'Designation':data.designation
    }

    data['Id'] = maxUserId + 1;
    this.localUserList.push(param);
    //userList = this.localUserList;
    return of(1);
  }

  editUser(userId: number, data:any):Observable<number>{
  for(let i=0;i<this.localUserList.length;i++){
    if(this.localUserList[i].Id == userId){
      this.localUserList[i].Name = data.name;
      this.localUserList[i].Gender = data.gender;
      this.localUserList[i].EmpID = data.empId;
      this.localUserList[i].Designation = data.designation;
    }
  }
    return of(1); 
  }

  deleteUser(userId: number){
    let deletingId = -1;
    for(let i=0;i<this.localUserList.length;i++){
      if(this.localUserList[i].Id == userId){
        deletingId = i;
    }
    if(deletingId >= 0)
    {
      this.localUserList.splice(deletingId, 1);
    }
    
  }
}
}

