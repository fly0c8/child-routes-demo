import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { MainViewComponent } from './main-view/main-view.component';
import { View1Component } from './main-view/view1/view1.component';
import { View2Component } from './main-view/view2/view2.component';
import { View3Component } from './main-view/view3/view3.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    MainViewComponent,
    View1Component,
    View2Component,
    View3Component,
    DashboardViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
