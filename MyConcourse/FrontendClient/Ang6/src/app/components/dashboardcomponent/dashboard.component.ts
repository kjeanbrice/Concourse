import { Component, OnInit } from '@angular/core';
import { NavbarComponent, SubNavbarComponent } from '../index';
import {DashboardService} from '../../services/index';
import { Group } from '../../interfaces/group.interface';
import { GroupedObservable } from 'rxjs';
import $ from 'jquery';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  items_per_row = 3;
  groups_container: Array<Group[]>;
  groups: Group[];

  constructor(private dashboard_service: DashboardService) {
    this.groups_container = [];
    this.groups_container[0] = [];
  }


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
        if ( i % this.items_per_row === 0 && i !== 0) {
          this.groups_container[++container_index] = [];
          }
          this.groups_container[container_index].push(this.groups[i]);
          console.log('Results: ' + JSON.stringify(this.groups_container));
      }
    },
    error => {
      console.log('An error occured while attempting to load data. Error: ' + error);
    });
  }

  onSubmit(event: any): void {
    switch (event.target.id) {
      case 'editgroup-submit':
      // API Call
      break;
      case 'joingroup-submit':
      // API Call
      break;
      case 'creategroup-submit':
      // API Call
      break;
      case 'deletegroup-submit':
      // API Call
      break;
    }
  }
  onClickGroupOptions(event: any): void {
    const discussion_id = event.target.getAttribute('data-discussionid');
    if (discussion_id === null) {
      return null;
    }

    let item: Group;
      for (let i = 0; i < this.groups.length; i++) {
        if ( this.groups[i].DiscussionBoardId === parseInt(discussion_id, 10)) {
          item = this.groups[i];
          break;
        }
      }

      if (item === null) {
        return;
      }

    switch (event.target.name) {
      case 'editgroup':
      (<HTMLInputElement>document.getElementById('edit-title')).value = item.Title;
      (<HTMLInputElement>document.getElementById('edit-description')).value = item.BoardDescription;
      (<HTMLInputElement>document.getElementById('edit-currgroupcode')).value = item.Code;
      document.getElementById('edit' + discussion_id).click();
      break;
      case 'detailsgroup':
      (<HTMLInputElement>document.getElementById('details-groupid')).value = item.CodeId + '';
      (<HTMLInputElement>document.getElementById('details-groupcode')).value = item.Code;
      document.getElementById('details' + discussion_id).click();
      break;
      case 'deletegroup':
      document.getElementById('delete' + discussion_id).click();
      break;


    }

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
