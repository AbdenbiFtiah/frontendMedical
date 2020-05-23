import { Router } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.authenticationService.removeToken();
  }
  onLogin(loginData){

   this.authenticationService.login(loginData.login,loginData.password);
   if(this.authenticationService.isAuthenticated){
      this.authenticationService.saveAuthenticatedUser();
      this.router.navigateByUrl('/Patients');
    // console.log('Auth');
  }
  }


}
