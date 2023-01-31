import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService:AuthenticationService,private _router:Router){

  }

  canActivate(route:ActivatedRouteSnapshot){

    if(this._authService.getToken!==null){
      
      console.log("Role from can",route.data["roles"]);
      console.log("from db",this._authService.getRoles());
      console.log("from can",route.data["roles"] === this._authService.getRoles());
        if(route.data["roles"] === this._authService.getRoles()){
          return true;
        }
        else{
          this._authService.logout();
          console.log('from can',route.data["roles"]+" "+this._authService.getRoles())
          this._router.navigate(['/login']);
          return false;
        }
           
      
} 

this._router.navigate(['login']);
return false;
  }
}
