import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  submitted = false;


  constructor(  private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, private _authService:AuthenticationService){

  }

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    this._authService.login(this.f['username'].value,this.f['password'].value).subscribe(res=>{
 
      this._authService.setRoles(res.token.roles);
      this._authService.setToken(res.token.token);
      
      if(res.token.roles){
         console.log("neg of role",res.token.roles)
        this.router.navigate(["/admin"]);  
      }
      else
      {
      this.router.navigate(["/user"]);
     }
    })
  }
  


}
