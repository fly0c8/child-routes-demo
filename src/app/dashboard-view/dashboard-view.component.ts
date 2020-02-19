import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {
  constructor(
    private router: Router,
    private loginservice: LoginService
  ) { }

  ngOnInit(): void {
    if(!this.loginservice.isLoggedIn) {
      this.router.navigate(['login'])
    }
  }
  toMainview() {
    this.router.navigate(['mainview']);
  }

}
