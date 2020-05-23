import { element } from 'protractor';
import { Utilisateur } from './../models/utilisateur';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private users;

  private userData = this.http
    .get<Utilisateur[]>('http://localhost:8090/users')
    .subscribe(
      (data) => {
        this.users = data;
      },
      (err) => {
        console.log(err);
      }
    );

  public isAuthenticated: Boolean;
  public userAuthenticated;
  public token: string;

  constructor(private http: HttpClient) {}

  public login(username: String, password: String) {
    let user;
    this.users.forEach((u) => {
      if (u.login == username && u.password == password) {
        user = u;
        this.token = btoa(
          JSON.stringify({ username: u.login, roles: u.roles[0].name })
        );
      }
    });
    if (user) {
      this.isAuthenticated = true;
      this.userAuthenticated = user;
    } else {
      this.isAuthenticated = false;
      this.userAuthenticated = undefined;
    }
  }
  public isAdmin() {
    if (this.userAuthenticated) {
      console.log(this.userAuthenticated);
      if ( this.userAuthenticated.roles == 'ADMIN' || this.userAuthenticated.roles[0].name == 'ADMIN') {
        return true;
      }
      return false;
    }
  }

  public saveAuthenticatedUser() {
    if (this.userAuthenticated) {
      localStorage.setItem('authToken', this.token);
    }
  }

  public loadAuthenticatedUser() {
    let token = localStorage.getItem('authToken');
    if (token) {
      let user = JSON.parse(atob(token));
      this.userAuthenticated = { username: user.username, roles: user.roles };
      this.isAuthenticated = true;
    }
  }

  public removeToken() {
    localStorage.removeItem('authToken');
    this.isAuthenticated = false;
    this.userAuthenticated = undefined;
    this.token = undefined;
  }
}
