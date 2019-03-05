import { Component, OnInit} from '@angular/core';
import { UserService } from '../../../services/index';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent implements OnInit {

  constructor(private user_service: UserService, private router: Router) {

  }
  //
  ngOnInit(): void {
  }
  //
  onSignOut(): void {
    this.user_service.logout();
    this.router.navigate(['\home']);
  }


}

