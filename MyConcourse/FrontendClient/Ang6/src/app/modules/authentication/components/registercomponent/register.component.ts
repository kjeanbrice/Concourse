import { Component, OnInit} from '@angular/core';
import { UserService } from '../../../../services/index';
import { Router } from '@angular/router';
import * as validator from 'validator';
import { ERROR_PASSWORD_INVALID_MATCH, ERROR_EMAIL_NOT_VALID, ERROR_PASSWORD_NOT_VALID,
   ERROR_TERMS_AND_CONIDTIONS, ERROR_NAME_NOT_VALID} from '../../../../constants/constants.export';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {
  user_email: string;
  user_password: string;
  user_firstname: string;
  user_lastname: string;
  user_confirm_password: string;
  error_email: string;
  error_password: string;
  error_confirm_password: string;
  error_firstname: string;
  error_lastname: string;
  error_terms_policy: string;
  terms_policy_checked: boolean;
  valid_firstname: boolean;
  valid_lastname: boolean;
  valid_email: boolean;
  valid_password: boolean;
  valid_confirm_password: boolean;
  valid_input: boolean;
  css_loading = 'dimmer';


  //
  constructor(private user_service: UserService, private router: Router) {}

  async ngOnInit() {
    await this.isAuthenticated();
    document.getElementById('input-email').setAttribute('value', '');
    document.getElementById('input-password').setAttribute('value', '');
    document.getElementById('input-confirm-password').setAttribute('value', '');
    document.getElementById('input-first-name').setAttribute('value', '');
    document.getElementById('input-last-name').setAttribute('value', '');
    (<HTMLInputElement>document.getElementById('input-agree')).checked = false;
    this.valid_input = false;
    document.getElementById('btn-register').setAttribute('disabled', '');
  }

  onUpdate(event: any): void {
    switch (event.target.id) {
      case 'input-first-name':
        let user_firstname: string = event.target.value;
        if (user_firstname === null || user_firstname === undefined) {
          user_firstname = '';
        }

        user_firstname = user_firstname.trim();
        if (user_firstname.length === 0) {
          this.error_firstname = ERROR_NAME_NOT_VALID;
          document.getElementById('lbl-error-first-name').style.display = 'block';
          this.valid_firstname = false;
        } else {
          this.error_firstname = '';
          this.valid_firstname = true;
          document.getElementById('lbl-error-first-name').style.display = 'none';
        }
        this.user_firstname = user_firstname;
      break;
      case 'input-last-name':
        let user_lastname: string = event.target.value;
        if (user_lastname === null || user_lastname === undefined) {
          user_lastname = '';
        }

        user_lastname = user_lastname.trim();
        if (user_lastname.length === 0) {
          this.error_lastname = ERROR_NAME_NOT_VALID;
          document.getElementById('lbl-error-last-name').style.display = 'block';
          this.valid_lastname = false;
        } else {
          this.error_lastname = '';
          this.valid_lastname = true;
          document.getElementById('lbl-error-last-name').style.display = 'none';
        }
        this.user_lastname = user_lastname;
      break;
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
        this.user_confirm_password = user_confirm_password;
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

    if (this.valid_firstname && this.valid_lastname && this.valid_email
      && this.valid_password && this.valid_confirm_password && this.terms_policy_checked) {
      this.valid_input = true;
      document.getElementById('btn-register').removeAttribute('disabled');
    } else {
      this.valid_input = false;
      document.getElementById('btn-register').setAttribute('disabled', '');
    }

  }


  async onRegister() {
    this.css_loading = 'dimmer active';
    let registration_success = false;
    //
    if (this.valid_input === true) {
        await(this.user_service.register(this.user_firstname,
        this.user_lastname, this.user_email, this.user_password, this.user_confirm_password)).subscribe(data => {
          registration_success = true;
          console.log('Register: Success!');
          // Log the user after registration completes
          this.user_service.login(this.user_email, this.user_password).subscribe(() => {
            this.css_loading = 'dimmer';
            this.router.navigate(['/dashboard']);
          },
          err => {
            this.css_loading = 'dimmer';
            this.router.navigate(['/home']);
          }
          );
        },
        err => {
          this.css_loading = 'dimmer';
          const err_des = (err['error'])['Message'];
          if (err_des) {
            this.error_terms_policy = err_des;
          } else {
            this.error_terms_policy = 'An error occurred. Please try again later.';
          }
          document.getElementById('lbl-error-policy').style.display = 'block';
        }
        );
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
