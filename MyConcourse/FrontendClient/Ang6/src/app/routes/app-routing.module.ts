import { Routes, RouterModule } from '@angular/router';
import { FooterComponent, DashboardComponent, SubNavbarComponent, NavbarComponent
  , NavbarHomeComponent, HomeComponent} from '../components/index';
import { LoginComponent, RegisterComponent } from '../modules/authentication/components/index';
import { PageNotFoundComponent } from '../modules/errors/components/index';
import { AuthGuard} from './guards/index';
import { NgModule } from '@angular/core';


const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];



@NgModule({
  imports: [ RouterModule.forRoot(app_routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule {}


