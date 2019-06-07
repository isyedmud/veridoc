import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Promise<boolean> {
    return new Promise((resolve, reject) => {
      const isLoggedIn = localStorage.getItem("isLoggedIn") == 'true'?true: false;
      if(isLoggedIn) {
        resolve(true);
      } else {
        this.router.navigate(['/menu/landing']);
        resolve(false);
      }
    });
  }
}