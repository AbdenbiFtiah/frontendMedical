import { AuthenticationService } from './services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService){}
  ngOnInit(): void {

    this.authenticationService.loadAuthenticatedUser();
  }
  title = 'frontendMedical';
}
