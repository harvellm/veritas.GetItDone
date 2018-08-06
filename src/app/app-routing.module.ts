import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginmainComponent } from './pages/loginmain/loginmain.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';

const routes: Routes = [
  { path: '', component: LoginmainComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'forgotpassword', component: ForgotpasswordComponent},
  /*{ path: 'step4', component: Step4Component},
  { path: 'step5', component: Step5Component},
  { path: 'step6', component: Step6Component} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
