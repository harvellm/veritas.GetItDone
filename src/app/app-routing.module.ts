import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginmainComponent } from './pages/loginmain/loginmain.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { ProjectinfoComponent } from './components/projectinfo/projectinfo.component';
import { AdminpanelComponent } from './pages/adminpanel/adminpanel.component';
import { ReportsComponent } from './pages/reports/reports.component';

const routes: Routes = [
  { path: '', component: LoginmainComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'forgotpassword', component: ForgotpasswordComponent},
  { path: 'newpassword', component: NewpasswordComponent},
  { path: 'projectinfo', component: ProjectinfoComponent},
  { path: 'adminpanel', component:AdminpanelComponent},
  { path: 'reports', component:ReportsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
