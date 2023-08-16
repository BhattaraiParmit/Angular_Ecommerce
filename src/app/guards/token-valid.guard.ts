import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { CurrentUser } from '../utils'

@Injectable({
  providedIn: 'root'
})

export class ValidTokenGuard implements CanActivate {
  constructor(
    private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = CurrentUser.getCurrentUser();
    let valid = (user && user.exp) > Date.now() / 1000; 
    if (valid) {
      this.router.navigate(['dashboard']);
      return false;
    }
    else{ 
      // localStorage.removeItem('currentUser');
      // localStorage.removeItem('token');
      // this.router.navigate(['/login']);
      return true};
  }
}