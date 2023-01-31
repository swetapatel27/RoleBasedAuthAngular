import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { AuthenticationService } from "../_services/authentication.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private _authService:AuthenticationService, private _router:Router){
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        if(req.headers.get("authorization")!=null)
        {
           
            return next.handle(req.clone({setHeaders: {
                'authorization': `Bearer ${this._authService.getToken()}`,
            }})); 
        }
        else{
            const token = this._authService.getToken();
            req = this.addtoken(req,token);
            return next.handle(req).pipe(
                catchError(
                    (err:HttpErrorResponse)=>{
                        console.log(err.status);
                        if(err.status===401){
                            this._router.navigate(['/login']);
                        }else if(err.status===403){
                            this._router.navigate(['/login']);
                        }
                        return throwError("something is wrong");
                    }
                )
            );
        }
        
    }

    private addtoken(request:HttpRequest<any>,token:string){
        return request.clone({
            setHeaders:{
                authorization:token
            }
        })
    }

}