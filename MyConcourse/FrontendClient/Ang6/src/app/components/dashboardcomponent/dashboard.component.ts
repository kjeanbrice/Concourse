import { Component, OnInit } from '@angular/core';
import { NavbarComponent, SubNavbarComponent } from '../index';
import { $ } from 'protractor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  ngOnInit() {
    // this.loadScript('content/angular/assets/js/jquery-3.2.1.min.js');
    this.loadScript('content/angular/assets/js/modifiedcore.js');
  }

  loadScript(url: string) {
   const body = <HTMLDivElement> document.body;
   const script = document.createElement('script');
   script.innerHTML = '';
   script.src = url;
   script.async = false;
   script.defer = true;
   body.appendChild(script);
 }
}
