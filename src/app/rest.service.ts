import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {Users} from 'src/app/users';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

  url:string ='http://localhost:3000/Users/';

  getUsers(){ return this.http.get<Users[]>(this.url);}

  createuser(data:Users){ return this.http.post(this.url, data);}

  deleteUser(users:Users){return this.http.delete(this.url+users.id);}

  updateuser(user:Users){return this.http.put(this.url+user.id,user);}

    
}

