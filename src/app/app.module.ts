import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_shared/auth.guard';
import { AuthInterceptor } from './_shared/auth.interceptor';
import { AuthenticationService } from './_services/authentication.service';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InitCapPipe } from './init-cap.pipe';
import { HeadColorDirective } from './head-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    UserFormComponent,
    InitCapPipe,
    HeadColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,{
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true,

    },
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
