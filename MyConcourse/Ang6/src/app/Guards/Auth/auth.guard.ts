import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../Services/index';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private user_service: UserService, private router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

   
    return this.user_service.isAuth().toPromise().then((response) => {
      if (response === true) {
        console.log("Hello from AuthGuard: true");
        return true;
      } else {
        console.log("Hello from AuthGuard: false");
        this.router.navigate(['/login']);
        return false;
      }
    }).catch((error) => {
      console.log("Hello from AuthGuard: catch(false)");
      this.router.navigate(['/login']);
      return false;
    }
    );


  }
}
