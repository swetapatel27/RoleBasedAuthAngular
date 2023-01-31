import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { User } from '../_Models/user';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   headers = new HttpHeaders({
    // 'Content-Type': 'application/json',
    'authorization': `Bearer ${this._authService.getToken()}`
  });

   requestOptions = { headers: this.headers };


  constructor(private http:HttpClient,private _authService:AuthenticationService) { }

  getUsers(){
    console.log("from get users",this.requestOptions);
    return this.http.get<any>(`${environment.apiUrl}/api/v1/auth/users`,this.requestOptions);
  }

  addUser(user:User){
    console.log(user);
    return this.http.post(`${environment.apiUrl}/api/v1/auth/signup`,user,this.requestOptions);
  }
}
