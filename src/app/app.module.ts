import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginmainComponent } from './pages/loginmain/loginmain.component';
import { LoginentryComponent } from './components/loginentry/loginentry.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectcardComponent } from './components/projectcard/projectcard.component';
import { ProjectprogressbarComponent } from './components/projectprogressbar/projectprogressbar.component';
import { StatusflagComponent } from './components/statusflag/statusflag.component';
import { ProjectcarddataComponent } from './components/projectcarddata/projectcarddata.component';
import { ProjectinfoComponent } from './components/projectinfo/projectinfo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReportpickerComponent } from './components/reportpicker/reportpicker.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginmainComponent,
    LoginentryComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    ProjectcardComponent,
    ProjectprogressbarComponent,
    StatusflagComponent,
    ProjectcarddataComponent,
    ProjectinfoComponent,
    HeaderComponent,
    FooterComponent,
    ReportpickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
