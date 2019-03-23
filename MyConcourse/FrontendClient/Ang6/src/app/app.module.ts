import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {FooterComponent, DashboardComponent, SubNavbarComponent, NavbarComponent, NavbarHomeComponent,
  HomeComponent, DiscussionBoardComponent } from './components/index';
import { AppRoutingModule } from './routes/index';
import { UserService, DashboardService, DiscussionBoardService } from './services/index';
import { AuthGuard } from './routes/guards/index';
import { AuthenticationModule, ErrorsModule } from './modules/index';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NavbarHomeComponent,
    DashboardComponent,
    SubNavbarComponent,
    FooterComponent,
    DiscussionBoardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthenticationModule,
    ErrorsModule
  ],
  providers: [
    UserService,
    DashboardService,
    DiscussionBoardService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
