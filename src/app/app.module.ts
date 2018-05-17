
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { TablesComponent } from './components/tables/tables.component';
import { FormsComponent } from './components/forms/forms.component';
import { FullLayoutComponent } from './components/_containers/full-layout/full-layout.component';
import { SimpleLayoutComponent } from './components/_containers/simple-layout/simple-layout.component';


import {
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  SettingsComponent
} from './components/_shared';

const APP_COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  SettingsComponent
];


@NgModule({
  declarations: [
    AppComponent,
    APP_COMPONENTS,
    AppmenuComponent,
    DashboardComponent,
    PageNotFoundComponent,
    LoginComponent,
    TablesComponent,
    FormsComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
