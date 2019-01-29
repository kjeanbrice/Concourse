import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/index';
import { Router } from '@angular/router';
import * as validator from 'validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  user_email = '';
  error_message = '';
  user_password = '';
  css_loading = 'dimmer';
  valid_email = false;
  valid_password = false;
  valid_input = false;


  constructor(private user_service: UserService, private router: Router) {

  }


  async ngOnInit() {

    await this.isAuthenticated();
    document.getElementById('userEmail').setAttribute('value', '');
    document.getElementById('userPassword').setAttribute('value', '');
    document.getElementById('btn-signin').setAttribute('disabled', '');
    console.log('End ngOnInit.');
  }

  onLogin() {
    this.css_loading = 'dimmer active';
    if (this.valid_input) {
      this.user_service.login(this.user_email, this.user_password).subscribe(data => {
        console.log('Response onLogin: ' + JSON.stringify(data));
        document.getElementById('lbl-error').style.display = 'none';
        this.css_loading = 'dimmer';
        this.router.navigate(['/dashboard']);
      },

        error => {

          console.log('Error onLogin: ' + JSON.stringify(error));
          const error_des = (error['error'])['error_description'];
          if (error_des) {
            this.error_message = error_des;
          } else {
            this.error_message = 'An error occurred. Please try again later.';
          }
          //
          document.getElementById('lbl-error').style.display = 'block';
          this.css_loading = 'dimmer';
        }
      );
    }

    console.log('Hello from onLogin()');
  }

  onUpdate(event: any) {
    switch (event.target.name) {
      case 'userEmail':
        const user_email = event.target.value.trim();
        this.valid_email = validator.isEmail(user_email);
        if (this.valid_email) {
          this.user_email = user_email;
        }
        console.log('em:' + this.user_email + ' v: ' + this.valid_email);
        break;
      case 'userPassword':
        const user_password: string = event.target.value.trim();
        this.valid_password = validator.isLength(user_password, { min: 8, max: undefined });
        if (this.valid_password) {
          this.user_password = user_password;
        }
        console.log('pw:' + this.user_password + 'v: ' + this.valid_password);
        break;
      default:
        console.log('Switch shouldn\'t arrive here');
    }

    if (this.valid_email === true && this.valid_password === true) {
      this.valid_input = true;
      document.getElementById('btn-signin').removeAttribute('disabled');
    } else {
      this.valid_input = false;
      document.getElementById('btn-signin').setAttribute('disabled', '');
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
