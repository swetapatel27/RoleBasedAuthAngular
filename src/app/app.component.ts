import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './_Models/user';
import { AuthenticationService } from './_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'RoleAuthDemo';
  isAdmin:boolean=false;
  isUser:boolean=false;
  
  constructor(private _authService:AuthenticationService,private _router:Router){
  }
   
  isLoggedIn(){
    this.roleMatch();
    // console.log(this._authService.isLoggedIn())
    return this._authService.isLoggedIn();
  }

  logout(){
    this.isAdmin=false;
    this.isUser = false;
    this._authService.logout();
    this._router.navigate(["/login"]);
  }

  roleMatch(){
    // console.log("match",this._authService.getRoles())
    if(this._authService.getRoles()!=null)
    {
      this.isAdmin = this._authService.getRoles();   
    }
    return false;
  }

}
