import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { Users } from '../users';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  luser: string="";

  ulist: Users[]=[];

  userObj={
    uname:'',
    mobile:'',
    email:'',
    password:'',
    id:0
    }
  constructor(private rst: RestService, private router: Router) { }

  ngOnInit(): void {
  }
  authuser(myform: NgForm){
    this.rst.getUsers().subscribe((response)=>{
      this.ulist = response;
      const usr= this.ulist.find(p=>p.uname==this.userObj.uname && p.password==this.userObj.password);
      if(usr){
        this.luser=usr.uname;
        alert("Welcome "+this.luser);
        this.router.navigate(['/home']);
        myform.reset();
      }else{
        alert("unauthorized");
        myform.reset();
      }
      console.log(response);
      }, (error) => console.log(error));
      
   }
   
}
