import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { MainViewComponent } from './main-view/main-view.component';
import { View1Component } from './main-view/view1/view1.component';
import { View2Component } from './main-view/view2/view2.component';
import { View3Component } from './main-view/view3/view3.component';

const routes: Routes = [

  { path: '', component: DashboardViewComponent },
  { path: 'dashboard', component: DashboardViewComponent},
  { path: 'login', component: LoginViewComponent},
  { path: 'mainview', component: MainViewComponent,
      children:[
        { path: 'view1', component: View1Component },
        { path: 'view2', component: View2Component },
        { path: 'view3', component: View3Component}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
