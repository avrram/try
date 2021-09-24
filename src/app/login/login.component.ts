import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  indstyle='indstyle1';
  frmLstyle='LoginForm2';
  frmRstyle='RegForm1';
  
  constructor() { }

  ngOnInit(): void {
  }

  public messageL(){
    alert("Login form is being implemented...");
    
  }
  public messageR(){
    alert("Register form is being implemented...");
    
  }


  public register(){
    this.indstyle='indstyle2';
    this.frmRstyle='RegForm2';
    this.frmLstyle='LoginForm1';
    }

  public login(){
    this.indstyle='indstyle1';
    this.frmRstyle='RegForm1';
    this.frmLstyle='LoginForm2';
    
  }
}
