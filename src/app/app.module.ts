import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// app modules
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
import { ReportsComponent } from './pages/reports/reports.component';
import { BarchartComponent } from './components/barchart/barchart.component';
import { ProjectsearchComponent } from './components/projectsearch/projectsearch.component';

// app import modules
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {PaginatorModule} from 'primeng/paginator';
import {DialogModule} from 'primeng/dialog';
import { ChartModule } from 'primeng/chart';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { ProjectdataService } from './services/projectdata.service';
import { Config } from './config/config';
import { AdminpanelComponent } from './pages/adminpanel/adminpanel.component';
import {CheckboxModule} from 'primeng/checkbox';
import {SelectButtonModule} from 'primeng/selectbutton';

// service modules
import { LogService } from './services/log.service';
import { LogPublishersService } from './services/logpublishers.service';
import { ReportDropdownComponent } from './components/report-dropdown/report-dropdown.component';
import { ReportDatepickerComponent } from './components/report-datepicker/report-datepicker.component';
import { DoughnutchartComponent } from './components/doughnutchart/doughnutchart.component';


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
    NewpasswordComponent,
    AdminpanelComponent,
    ReportsComponent,
    BarchartComponent,
    ProjectsearchComponent,
    ReportDropdownComponent,
    ReportDatepickerComponent,
    DoughnutchartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ProgressBarModule,
    InputTextModule,
    RadioButtonModule,
    DropdownModule,
    CalendarModule,
    ButtonModule,
    SidebarModule,
    OverlayPanelModule,
    PaginatorModule,
    DialogModule,
    HttpClientModule,
    CheckboxModule,
    ChartModule,
    AutoCompleteModule,
    SelectButtonModule
  ],
  providers: [Title, ProjectdataService, Config, LogService, LogPublishersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
