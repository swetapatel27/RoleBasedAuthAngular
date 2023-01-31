import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {



  constructor(private http:HttpClient) { }

    login(email:string,password:string){

      return this.http.post<any>(`${environment.apiUrl}/api/v1/auth/login`, { email, password });
    }

   setRoles(roles:[]){
    localStorage.setItem("roles",JSON.stringify(roles));
   } 

   getRoles(){
    if(localStorage.getItem('roles')!=null){
      return JSON.parse(localStorage.getItem('roles')!);
    }
    else{
      return false;
    }
   } 

   setToken(token:string){
    localStorage.setItem("token",token); 
   }

   getToken():string{
    return localStorage.getItem("token")||'{}';
   }
    
   logout(){
    localStorage.clear();
   }

    isLoggedIn(){

      if(this.getRoles()!='{}'&&this.getToken()!='{}'){
       
        return true;
      }
      else
        return false;
    //  const  user:any = localStorage.getItem("user")

    //  let token = JSON.parse(user);
     

    //   if(token!=null){
    //     return true;
    //   }
    //   else{
        
    //     return false;

    //   }
    }
    

}
