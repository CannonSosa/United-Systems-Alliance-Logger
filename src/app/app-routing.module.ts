import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogDashboardComponent } from './pages/log-dashboard/log-dashboard.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'dashboard', component: LogDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
