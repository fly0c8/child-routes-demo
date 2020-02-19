import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  constructor(
    private loginservice: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(!this.loginservice.isLoggedIn) {
      console.log('rerouting to login....')
      this.router.navigate(['login'])
    }
  }
  toView1() {
    this.router.navigate(['mainview/view1']);
  }
  toView2() {
    this.router.navigate(['mainview/view2']);
  }
  toView3() {
    this.router.navigate(['mainview/view3']);
  }
  logout() {
    this.loginservice.isLoggedIn = false;
    this.router.navigate(['login']);
  }

}
