import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Users } from '../users';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  ulist: Users[]=[];

isEdit=false;
userObj={
	uname:'',
	mobile:'',
	email:'',
	password:'',
	id:0
	}
  constructor(private rst: RestService) { }

  ngOnInit():void{
    this.getLatestUsers();
     }
  
     getLatestUsers(){
      this.rst.getUsers().subscribe((response)=>{
        this.ulist = response;
        console.log(response);
        }, (error) => console.log(error))
      }
      addUser(formObj:Users){
        console.log(formObj)
        this.rst.createuser(formObj).subscribe((response)=>{this.getLatestUsers();});
      }
      deleteUser(user:Users){
        this.rst.deleteUser(user).subscribe(()=>{this.getLatestUsers();});
      }
      editUser(user:Users){
        this.isEdit=true;
        this.userObj=user;
      }
      updateuser(){
        this.isEdit=!this.isEdit;
        this.rst.updateuser(this.userObj).subscribe(()=>{
        this.getLatestUsers();
        })
      }


}
