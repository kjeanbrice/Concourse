import { Component, OnInit} from '@angular/core';
import { UserService } from '../../../../services/index';
import { Router } from '@angular/router';
import * as validator from 'validator';
import { ERROR_PASSWORD_INVALID_MATCH, ERROR_EMAIL_NOT_VALID, ERROR_PASSWORD_NOT_VALID,
   ERROR_TERMS_AND_CONIDTIONS } from '../../../../constants/constants.export';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {
  user_email: string;
  user_password: string;
  error_email: string;
  error_password: string;
  error_confirm_password: string;
  error_terms_policy: string;
  terms_policy_checked: boolean;
  valid_email: boolean;
  valid_password: boolean;
  valid_confirm_password: boolean;
  valid_input: boolean;
  //
  constructor(private user_service: UserService, private router: Router) {}

  async ngOnInit() {
    await this.isAuthenticated();
    document.getElementById('input-email').setAttribute('value', '');
    document.getElementById('input-password').setAttribute('value', '');
    document.getElementById('input-confirm-password').setAttribute('value', '');
    (<HTMLInputElement>document.getElementById('input-agree')).checked = false;
    this.valid_input = false;
    document.getElementById('btn-register').setAttribute('disabled', '');
  }

  onUpdate(event: any): void {
    switch (event.target.id) {
      case 'input-email':
        let user_email: string = event.target.value;
        if (user_email === null || user_email === undefined) {
          user_email = '';
        }
        //
        this.valid_email = validator.isEmail(user_email);
        if (!this.valid_email) {
          this.error_email = ERROR_EMAIL_NOT_VALID;
          document.getElementById('lbl-error-email').style.display = 'block';
        } else {
          this.error_email = '';
          document.getElementById('lbl-error-email').style.display = 'none';
        }
        //
        this.user_email = user_email;
        console.log('user_email: ' + this.user_email + ' v: ' + this.valid_email);
      break;
      case 'input-password':
        let user_password: string = event.target.value;
        if (user_password === null || user_password === undefined) {
          user_password = '';
        }
        //
        this.valid_password = validator.isLength(user_password, { min: 8, max: undefined });
        this.user_password = user_password;
        //
        if (!this.valid_password) {
          this.error_password = ERROR_PASSWORD_NOT_VALID;
          document.getElementById('lbl-error-password').style.display = 'block';
        } else {
          this.error_password = '';
          document.getElementById('lbl-error-password').style.display = 'none';
        }

        //
        console.log('user_password: ' + this.user_password + ' v: ' + this.valid_password);
      break;
      case 'input-confirm-password':
      const user_confirm_password: string = event.target.value;
        if (user_confirm_password === null || user_confirm_password === undefined || user_confirm_password.trim().length === 0) {
          break;
        }

        if (user_confirm_password === this.user_password) {
          this.valid_confirm_password = true;
          this.error_confirm_password = '';
          document.getElementById('lbl-error-confirm-password').style.display = 'none';

        } else {
          this.valid_confirm_password = false;
          this.error_confirm_password = ERROR_PASSWORD_INVALID_MATCH;
          document.getElementById('lbl-error-confirm-password').style.display = 'block';
        }
        //
        console.log('user_confirm_password: ' + this.valid_confirm_password + ' v: ' + this.valid_confirm_password);
      break;
      case 'input-agree':
        const terms_policy_checked = (<HTMLInputElement>document.getElementById('input-agree')).checked;
          if (terms_policy_checked === true) {
          this.terms_policy_checked = true;
          this.error_terms_policy = '';
          document.getElementById('lbl-error-policy').style.display = 'none';
        } else {
          this.terms_policy_checked = false;
          this.error_terms_policy = ERROR_TERMS_AND_CONIDTIONS;
          document.getElementById('lbl-error-policy').style.display = 'block';
        }
      break;
      default:
        console.log('event for target not supported');
    }

    if (this.valid_email && this.valid_password && this.valid_confirm_password && this.terms_policy_checked) {
      this.valid_input = true;
      document.getElementById('btn-register').removeAttribute('disabled');
    } else {
      this.valid_input = false;
      document.getElementById('btn-register').setAttribute('disabled', '');
    }

  }
  async isAuthenticated() {
    const res = await (this.user_service.isAuth().toPromise());
    console.log('IsAuthenticated: ' + res);
    if (res === true) {
      this.router.navigate(['/dashboard']);
    }
  }
}
