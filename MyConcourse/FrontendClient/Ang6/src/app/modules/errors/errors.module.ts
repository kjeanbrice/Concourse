import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/index';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ PageNotFoundComponent ],
  exports: [ PageNotFoundComponent ]
})
export class ErrorsModule { }
