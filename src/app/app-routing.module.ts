import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { TablesComponent } from './components/tables/tables.component';
import { FormsComponent } from './components/forms/forms.component';
import { FullLayoutComponent } from './components/_containers/full-layout/full-layout.component';
import { SimpleLayoutComponent } from './components/_containers/simple-layout/simple-layout.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '', component: SimpleLayoutComponent,
    children: [
      {path: 'login', component: LoginComponent}
    ]
  },
  {path: '', component: FullLayoutComponent,
  children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'tables', component: TablesComponent},
    {path: 'forms', component: FormsComponent}
  ]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
