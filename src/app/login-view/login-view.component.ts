import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {


  constructor(
    private loginservice: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  logon() {
    this.loginservice.isLoggedIn = true;
    this.router.navigate(['dashboard'])
  }

}
