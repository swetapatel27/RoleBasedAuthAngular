import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_shared/auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:UserFormComponent},
  {path:'user',component:UserComponent,canActivate:[AuthGuard],data:{roles:false}},
  {path:'admin',component:AdminComponent, canActivate:[AuthGuard],data:{roles:true}},
  {path:'createUser',component:UserFormComponent,canActivate:[AuthGuard],data:{roles:true}},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
