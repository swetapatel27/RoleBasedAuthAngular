import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomvalidationsService } from '../_services/customvalidations.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm:any;
  submitted=false;
  path="";
  constructor(private router:Router, private _activatedRoute:ActivatedRoute, private customValidator:CustomvalidationsService,private fb: FormBuilder,private _userService:UserService){

  }

 
  
  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstname: new FormControl('',[Validators.required]),
      lastname: new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required]),
      confirmpassword:new FormControl('',[Validators.required]),
  
    },
    
    {
      validator: this.customValidator.MatchPassword('password','confirmPassword'),
    }
    
    );

  }

  get userFormControl() {
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.valid) {
      console.log(this.userForm.value);

      this._userService.addUser(this.userForm.value).subscribe((res)=>{
        this._activatedRoute.url.subscribe(res=>{
          this. path = res[0].path
         });

         if(this.path=="signup")
         {
          this.router.navigate(["login"]);
      }else{
        this.router.navigate(["admin"]);
      }
      })
    }
  }


}
