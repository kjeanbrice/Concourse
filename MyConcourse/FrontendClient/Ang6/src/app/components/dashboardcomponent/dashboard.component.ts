import { Component, OnInit } from '@angular/core';
import { NavbarComponent, SubNavbarComponent } from '../index';
import {DashboardService} from '../../services/index';
import { Group } from '../../interfaces/group.interface';
import { GroupedObservable } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  items_per_row = 3;
  groups_container: Array<Group[]>;
  groups: Group[];

  constructor(private dashboard_service: DashboardService) {}


  ngOnInit() {
    // this.loadScript('content/angular/assets/js/jquery-3.2.1.min.js');
    this.loadScript('content/angular/assets/js/modifiedcore.js');
    this.loadGroups();
  }


  loadGroups(): void {
    this.dashboard_service.retrieveGroups().subscribe(data => {
      this.groups = data;
      let container_index = 0;
      for (let i = 0; i < this.groups.length; i++) {
        // tslint:disable-next-line:prefer-const
        if ( i % 3 === 0 && i !== 0) {
          this.groups_container[++container_index].push(this.groups[i]);
        } else {
          this.groups_container[container_index].push(this.groups[i]);
        }
        console.log('Results: ' + JSON.stringify(this.groups_container));
      }
    },
    error => {
      console.log('An error occured while attempting to load data. Error: ' + error);
    });
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
