import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {FooterComponent, DashboardComponent, SubNavbarComponent, NavbarComponent, NavbarHomeComponent, HomeComponent, RegisterComponent, LoginComponent} from './Components/index';
import { routing } from './Routes/app.routing';
import { UserService } from './Services/index';
import { AuthGuard } from './Guards/index';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NavbarHomeComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    SubNavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [
    UserService,
    AuthGuard


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
