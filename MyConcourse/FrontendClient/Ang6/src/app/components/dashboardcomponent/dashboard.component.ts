import { Component, OnInit } from '@angular/core';
import { NavbarComponent, SubNavbarComponent } from '../index';
import { DashboardService, DiscussionBoardService } from '../../services/index';
import { Group } from '../../interfaces/group.interface';
import { ERROR_NAME_NOT_VALID, ERROR_SERVER, ERROR_GENERIC } from '../../constants/constants.export';
import * as validator from 'validator';
import { Router } from '@angular/router';
import { GroupedObservable } from 'rxjs';
import $ from 'jquery';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  MAX_TITLE_LIMIT = 80;
  MAX_DESCRIPTION_LIMIT = 500;
  MAX_CODE_LIMIT = 30;

  items_per_row = 2;
  groups_container: Array<Group[]>;
  groups: Group[];


  error_create_group_title: string;
  error_create_group_description: string;
  error_create_group_code: string;
  error_create_group_server: string;
  error_delete_group: string;
  error_edit_group: string;

  error_join_group_server: string;


  create_group_title_count: string;
  create_group_description_count: string;
  create_group_code_count: string;

  join_group_id: string;
  join_group_code: string;

  create_group_title: string;
  create_group_description: string;
  create_group_code: string;

  valid_create_group_title = false;
  valid_create_group_description = false;
  valid_create_group_code = false;
  valid_create_group_info = false;

  valid_join_group_id = false;
  valid_join_group_code = false;
  valid_join_group_info = false;

  css_loading_creategroup = 'dimmer';
  css_loading_joingroup = 'dimmer';
  css_loading_deletegroup = 'dimmer';
  css_loading_editgroup = 'dimmer';


  alert_success_settings = 'hide-item';
  alert_success_message = '';

  constructor(private router: Router, private dashboard_service: DashboardService,
    private discussionboard_service: DiscussionBoardService) {
  }


  ngOnInit() {
    // this.loadScript('content/angular/assets/js/jquery-3.2.1.min.js');
    this.loadScript('content/angular/assets/js/modifiedcore.js');
    this.loadGroups();

    this.resetFormFields();
  }

  /*onCreateGroup(event: any): void {
    this.css_loading_creategroup = 'dimmer active';
    if (this.valid_create_group_info === true) {
      if (this.create_group_description === undefined || this.create_group_description === null) {
        this.create_group_description = '';
      }

      this.dashboard_service.createGroup(this.create_group_title, this.create_group_description, this.create_group_code).subscribe(
        data => {
          document.getElementById('createmodal-close').click();
          this.changeAlertSuccessMessage('You have successfully created a new group called ' + this.create_group_title + '!');
          this.onAlertSuccessOpen();
          this.resetFormFields();
          document.getElementById('error-creategroup-server').style.display = 'none';
          this.loadGroups();
        },
        errors => {
          if (errors.error) {
            this.error_create_group_server = errors.error;
          } else {
            this.error_create_group_server = ERROR_SERVER_ERROR;
          }
          document.getElementById('error-creategroup-server').style.display = 'block';
          this.css_loading_creategroup = 'dimmer';
        });
    } else {
      this.css_loading_creategroup = 'dimmer';
      console.log('Dashboard: CreateGroup Error');
    }

  }

  onJoinGroup(event: any): void {
    this.css_loading_joingroup = 'dimmer active';
    if (this.valid_join_group_info === true) {
      this.dashboard_service.joinGroup(this.join_group_id, this.join_group_code).subscribe(
        data => {
          this.changeAlertSuccessMessage('You have successfully joined a new group!');
          this.onAlertSuccessOpen();
          this.resetFormFields();
          document.getElementById('joinmodal-close').click();
          document.getElementById('error-joingroup-server').style.display = 'none';
          this.css_loading_joingroup = 'dimmer';
          this.loadGroups();
        },
        errors => {
          console.log('Error:' + JSON.stringify(errors));
          if (errors.error) {
            this.error_join_group_server = errors.error;
          } else {
            this.error_join_group_server = ERROR_SERVER_ERROR;
          }
          document.getElementById('error-joingroup-server').style.display = 'block';
          this.css_loading_joingroup = 'dimmer';
        }
      );
    }
  }*/





  changeAlertSuccessMessage(message: string): void {
    this.alert_success_message = message;
  }

  onAlertSuccessClose(event: any): void {
    this.alert_success_settings = 'hide-item';
  }

  onAlertSuccessOpen(): void {
    if (this.alert_success_settings === 'hide-item') {
      this.alert_success_settings = '';
    } else {
      this.alert_success_settings = 'hide-item';
      this.alert_success_settings = '';
    }
  }


  loadGroups(): void {
    this.dashboard_service.retrieveGroups().subscribe(data => {
      this.groups = data;
      let container_index = 0;
      this.groups_container = [];
      this.groups_container[container_index] = [];

      for (let i = 0; i < this.groups.length; i++) {
        if (i % this.items_per_row === 0 && i !== 0) {
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
    console.log('OnSubmit');
    switch (event.target.id) {
      case 'btn-editgroup':
        // API Call
        this.css_loading_editgroup = 'dimmer active';
        let new_title = (<HTMLInputElement>document.getElementById('edit-title')).value;
        let new_description =  (<HTMLInputElement>document.getElementById('edit-description')).value;
        const old_group_code = (<HTMLInputElement>document.getElementById('edit-currgroupcode')).value;
        let new_group_code = (<HTMLInputElement>document.getElementById('edit-newgroupcode')).value;
        const edit_itemid = document.getElementById('edit-discussionid').getAttribute('data-discussionid');

        new_title = new_title ? new_title : '';
        new_description = new_description ? new_description : '';
        if (new_group_code === undefined || new_group_code === null || new_group_code.trim().length === 0) {
          if (old_group_code === undefined || old_group_code === null || old_group_code.trim().length === 0) {
            new_group_code = '';
          } else {
            new_group_code = old_group_code;
          }

        }

        this.dashboard_service.editGroup(new_title, new_description, new_group_code, edit_itemid).subscribe(
          data => {
            this.changeAlertSuccessMessage('You have successfully edited a group!');
            this.onAlertSuccessOpen();
            this.resetFormFields();
            document.getElementById('editmodal-close').click();
            document.getElementById('error-editgroup').style.display = 'none';
            this.css_loading_editgroup = 'dimmer';
            this.loadGroups();
          },
          errors => {
            console.log('Error:' + JSON.stringify(errors));
            if (errors.error) {
              this.error_edit_group = errors.error;
            } else {
              this.error_edit_group = ERROR_SERVER;
            }
            document.getElementById('error-editgroup').style.display = 'block';
            this.css_loading_editgroup = 'dimmer';
          }
        );
        break;
      case 'btn-joingroup':
        // API Call
        this.css_loading_joingroup = 'dimmer active';
        if (this.valid_join_group_info === true) {
          this.dashboard_service.joinGroup(this.join_group_id, this.join_group_code).subscribe(
            data => {
              this.changeAlertSuccessMessage('You have successfully joined a new group!');
              this.onAlertSuccessOpen();
              this.resetFormFields();
              document.getElementById('joinmodal-close').click();
              document.getElementById('error-joingroup-server').style.display = 'none';
              this.css_loading_joingroup = 'dimmer';
              this.loadGroups();
            },
            errors => {
              console.log('Error:' + JSON.stringify(errors));
              if (errors.error) {
                this.error_join_group_server = errors.error;
              } else {
                this.error_join_group_server = ERROR_SERVER;
              }
              document.getElementById('error-joingroup-server').style.display = 'block';
              this.css_loading_joingroup = 'dimmer';
            }
          );
        }
        break;
      case 'btn-creategroup':
        // API Call
        this.css_loading_creategroup = 'dimmer active';
        if (this.valid_create_group_info === true) {
          if (this.create_group_description === undefined || this.create_group_description === null) {
            this.create_group_description = '';
          }

          this.dashboard_service.createGroup(this.create_group_title, this.create_group_description, this.create_group_code).subscribe(
            data => {
              document.getElementById('createmodal-close').click();
              this.changeAlertSuccessMessage('You have successfully created a new group called \'' + this.create_group_title + '\'!');
              this.onAlertSuccessOpen();
              this.resetFormFields();
              document.getElementById('error-creategroup-server').style.display = 'none';
              this.loadGroups();
            },
            errors => {
              if (errors.error) {
                this.error_create_group_server = errors.error;
              } else {
                this.error_create_group_server = ERROR_SERVER;
              }
              document.getElementById('error-creategroup-server').style.display = 'block';
              this.css_loading_creategroup = 'dimmer';
            });
        } else {
          this.css_loading_creategroup = 'dimmer';
          console.log('Dashboard: CreateGroup Error');
        }
        break;
      case 'btn-deletegroup':
        // API Call
        this.css_loading_deletegroup = 'dimmer active';
        const item_id = document.getElementById('delete-discussionid').getAttribute('data-discussionid');
        if (item_id === null || item_id === undefined) {
          this.error_delete_group = ERROR_SERVER;
          document.getElementById('error-deletegroup').style.display = 'block';
        } else {
          this.dashboard_service.deleteGroup(item_id).subscribe(
            data => {
              this.changeAlertSuccessMessage('You have successfully deleted the group.');
              console.log('Delete: Success');
              document.getElementById('error-deletegroup').style.display = 'none';
              document.getElementById('deletegroup-close').click();
              this.onAlertSuccessOpen();
              this.loadGroups();
              this.resetFormFields();
              this.css_loading_deletegroup = 'dimmer';
            },
            errors => {
              if (errors.error) {
                this.error_delete_group = errors.error;
              } else {
                this.error_delete_group = ERROR_SERVER;
              }
              document.getElementById('error-deletegroup').style.display = 'block';
              this.css_loading_deletegroup = 'dimmer';
            }
          );
        }
        break;
        default:
        console.log('OnSubmit: No event handler found for requested event.');
        break;
    }
  }


  onUpdateCreateGroup(event: any): void {

    switch (event.target.id) {
      case 'creategroup-title':
        const title = event.target.value;
        if (title === null || title.trim().length === 0) {
          this.error_create_group_title = ERROR_NAME_NOT_VALID;
          document.getElementById('error-creategroup-title').style.display = 'block';
          this.valid_create_group_title = false;
        } else {
          this.create_group_title = title.trim();
          this.valid_create_group_title = true;
          document.getElementById('error-creategroup-title').style.display = 'none';
        }

        this.create_group_title_count = event.target.value.length + '/' + this.MAX_TITLE_LIMIT;
        break;
      case 'creategroup-description':
        let description = event.target.value;
        if (description === null || description.trim().length === 0) {
          description = '';
        }

        this.create_group_description_count = event.target.value.length + '/' + this.MAX_DESCRIPTION_LIMIT;
        this.create_group_description = description.trim();

        break;
      case 'creategroup-code':
        const groupcode = event.target.value;
        if (groupcode === null || groupcode.trim().length === 0) {
          this.error_create_group_code = ERROR_NAME_NOT_VALID;
          document.getElementById('error-creategroup-code').style.display = 'block';
          this.valid_create_group_code = false;
        } else {
          this.create_group_code = groupcode.trim();
          document.getElementById('error-creategroup-code').style.display = 'none';
          this.valid_create_group_code = true;
        }

        this.create_group_code_count = event.target.value.length + '/' + this.MAX_CODE_LIMIT;
        break;
      default:
        console.log('OnUpdate: Dashboard Error');
        break;
    }

    if (this.valid_create_group_title && this.valid_create_group_code) {
      this.valid_create_group_info = true;
      document.getElementById('btn-creategroup').removeAttribute('disabled');
    } else {
      this.valid_create_group_info = false;
      document.getElementById('btn-creategroup').setAttribute('disabled', '');
    }

  }


  onUpdateJoinGroup(event: any): void {
    switch (event.target.id) {
      case 'joingroup-id':
        const groupid: string = event.target.value.trim();
        this.valid_join_group_id = validator.isLength(groupid, { min: 1, max: undefined });
        this.error_create_group_code = ERROR_NAME_NOT_VALID;
        if (this.valid_join_group_id) {
          document.getElementById('error-joingroup-id').style.display = 'none';
          this.join_group_id = groupid;
        } else {
          document.getElementById('error-joingroup-id').style.display = 'block';
        }

        break;
      case 'joingroup-code':
        const groupcode: string = event.target.value.trim();
        this.error_create_group_code = ERROR_NAME_NOT_VALID;
        this.valid_join_group_code = validator.isLength(groupcode, { min: 1, max: undefined });
        if (this.valid_join_group_code) {
          this.join_group_code = groupcode;
          document.getElementById('error-joingroup-code').style.display = 'none';
        } else {
          document.getElementById('error-joingroup-code').style.display = 'block';
        }
        break;
      default:
        break;
    }

    if (this.valid_join_group_code && this.valid_join_group_id) {
      this.valid_join_group_info = true;
      document.getElementById('btn-joingroup').removeAttribute('disabled');
    } else {
      this.valid_join_group_info = false;
      document.getElementById('btn-joingroup').setAttribute('disabled', '');
    }
  }
  onClickGroupOptions(event: any): void {
    const discussion_id = event.target.getAttribute('data-discussionid');
    if (discussion_id === null) {
      return null;
    }

    let item: Group;
    for (let i = 0; i < this.groups.length; i++) {
      if (this.groups[i].DiscussionBoardId === parseInt(discussion_id, 10)) {
        item = this.groups[i];
        break;
      }
    }

    if (item === null) {
      return;
    }

    switch (event.target.name) {
      case 'entergroup':
      const discussionboard_id = event.target.getAttribute('data-discussionid');
      this.discussionboard_service.setDiscussionBoardID(discussionboard_id);
      this.router.navigate(['/discussion', discussionboard_id]);
      break;
      case 'editgroup':
        (<HTMLInputElement>document.getElementById('edit-title')).value = item.Title;
        (<HTMLInputElement>document.getElementById('edit-description')).value = item.BoardDescription;
        (<HTMLInputElement>document.getElementById('edit-currgroupcode')).value = item.Code;
        (<HTMLInputElement>document.getElementById('edit-discussionid')).value = discussion_id;
        document.getElementById('edit-discussionid').setAttribute('data-discussionid', discussion_id);
        document.getElementById('edit' + discussion_id).click();
        break;
      case 'detailsgroup':
        (<HTMLInputElement>document.getElementById('details-groupid')).value = item.CodeId + '';
        (<HTMLInputElement>document.getElementById('details-groupcode')).value = item.Code;
        document.getElementById('details' + discussion_id).click();
        break;
      case 'deletegroup':
        document.getElementById('delete' + discussion_id).click();
        document.getElementById('delete-discussionid').setAttribute('data-discussionid', discussion_id);
        break;
    }

  }

  resetFormFields(): void {

    (<HTMLInputElement>document.getElementById('edit-title')).value = '';
    (<HTMLInputElement>document.getElementById('edit-description')).value = '';
    (<HTMLInputElement>document.getElementById('edit-currgroupcode')).value = '';
    (<HTMLInputElement>document.getElementById('edit-discussionid')).value = '';
    (<HTMLInputElement>document.getElementById('edit-newgroupcode')).value = '';

    (<HTMLInputElement>document.getElementById('creategroup-title')).value = '';
    (<HTMLInputElement>document.getElementById('creategroup-description')).value = '';
    (<HTMLInputElement>document.getElementById('creategroup-code')).value = '';

    (<HTMLInputElement>document.getElementById('joingroup-id')).value = '';
    (<HTMLInputElement>document.getElementById('joingroup-code')).value = '';

    document.getElementById('error-creategroup-title').style.display = 'none';
    document.getElementById('error-creategroup-code').style.display = 'none';
    document.getElementById('error-joingroup-id').style.display = 'none';
    document.getElementById('error-joingroup-code').style.display = 'none';

    this.create_group_title_count = 0 + '/' + this.MAX_TITLE_LIMIT;
    this.create_group_description_count = 0 + '/' + this.MAX_DESCRIPTION_LIMIT;
    this.create_group_code_count = 0 + '/' + this.MAX_CODE_LIMIT;

    document.getElementById('btn-creategroup').setAttribute('disabled', '');
    document.getElementById('btn-joingroup').setAttribute('disabled', '');

    this.valid_create_group_title = false;
    this.valid_create_group_description = false;
    this.valid_create_group_code = false;
    this.valid_create_group_info = false;

    this.css_loading_creategroup = 'dimmer';
    this.css_loading_joingroup = 'dimmer';
    this.css_loading_editgroup = 'dimmer';
    this.css_loading_deletegroup = 'dimmer';
  }

  loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}
