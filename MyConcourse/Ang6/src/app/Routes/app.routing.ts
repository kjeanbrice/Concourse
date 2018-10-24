import { Routes, RouterModule } from '@angular/router';
import { FooterComponent, DashboardComponent, SubNavbarComponent, NavbarComponent, NavbarHomeComponent, HomeComponent, RegisterComponent, LoginComponent } from '../Components/index';
import { AuthGuard} from '../Guards/index';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
