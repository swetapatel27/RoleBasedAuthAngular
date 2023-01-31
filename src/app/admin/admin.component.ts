import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users:any;

  

  constructor(private userService:UserService){
  }

  ngOnInit(): void {
    
    this.userService.getUsers().subscribe((res)=>{
      this.users = res;
    });


  }


}
