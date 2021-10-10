import { Component, OnInit } from '@angular/core';
import {RestService} from 'src/app/rest.service';
import {Users} from 'src/app/users';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'InsuranceWebsite';

users : Users[] =  []
  constructor(private rs:RestService){}

ngOnInit():void{
  this.rs.getUsers().subscribe
  (
    (response)=>
    {
      this.users = response;
      console.log(response);
    },
    (error) => console.log(error)
  )

 }
 
}

