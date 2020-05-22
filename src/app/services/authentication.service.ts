import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private users = [
    {username: 'admin', password: 'admin', roles: ['ADMIN', 'USER']},
    {username: 'user1', password: 'user', roles: ['USER']},
    {username: 'user2', password: 'user', roles: ['USER']},

  ];

  public isAuthenticated: Boolean;
  public userAuthenticated;
  public token;
  constructor() { }

  public login(username: String, password: String){
    let user;
    this.users.forEach(u => {
      if (u.username == username && u.password == password) {
        user = u;
        this.token={username:u.username, roles: u.roles};
     }
    });
    if (user){
      this.isAuthenticated = true;
      this.userAuthenticated = user;
     }
     else{
       this.isAuthenticated = false;
       this.userAuthenticated = undefined;
     }

  }
  public isAdmin(){
    if (this.userAuthenticated){
      if (this.userAuthenticated.roles.indexOf('ADMIN') > -1){
        return true;
      }
      return false;
    }
  }

  public saveAuthenticatedUser(){
    if(this.userAuthenticated){
      localStorage.setItem('authToken',JSON.stringify(this.token));
    }
  }
}
