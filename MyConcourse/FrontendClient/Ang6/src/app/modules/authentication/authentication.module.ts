import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent, RegisterComponent } from './components/index';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ LoginComponent, RegisterComponent  ],
  exports: [ LoginComponent, RegisterComponent ]
})
export class AuthenticationModule { }
