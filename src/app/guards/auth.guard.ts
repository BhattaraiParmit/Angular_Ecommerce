import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginModel } from '../model';
import { CurrentUser } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  currentUser = new LoginModel();
  constructor(private _router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const user = CurrentUser.getCurrentUser();
    let valid = (user && user.exp) > Date.now() / 1000;
    if (!valid) {
      this._router.navigate(['./login'], {
        queryParams: { returnUrl: state.url },
      });
      return false;
    }
    return true;
  }
}
