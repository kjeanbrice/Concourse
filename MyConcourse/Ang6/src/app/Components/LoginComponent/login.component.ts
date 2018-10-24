import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/index'
import { Router } from '@angular/router'

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{
   
  user_email: string = '';
  user_password: string = '';
  css_loading: string = 'dimmer';


  constructor(private user_service: UserService, private router: Router) {

  }


  ngOnInit(): void {

    this.isAuthenticated();
    console.log("End ngOnInit.");
  }

  onLogin() {
    this.css_loading = "dimmer active";
    this.user_service.login(this.user_email, this.user_password).subscribe(data => {
      console.log("Response onLogin: " + JSON.stringify(data))
      this.css_loading = "dimmer";
      this.router.navigate(['/dashboard']);
    },

      error => {

        console.log("Error onLogin: " + JSON.stringify(error));
        this.css_loading = "dimmer";
      }
    );

    console.log("Hello from onLogin()");
  }

  onUpdate(event: any) {
    switch (event.target.name) {
      case 'userEmail':
        let user_email: string = event.target.value.trim();
        this.user_email = user_email;
        console.log("em:" + this.user_email);
        break;
      case 'userPassword':
        let user_password: string = event.target.value.trim();
        this.user_password = user_password;
        console.log("pw:" + this.user_password);
        break;
      default:
        console.log("Switch shouldn't arrive here");
    }
  }

  async isAuthenticated(){
    let res = await (this.user_service.isAuth().toPromise());
    console.log("IsAuthenticated: " + res);
    if (res === true) {
      this.router.navigate(['/dashboard']);
    }



  }



}
