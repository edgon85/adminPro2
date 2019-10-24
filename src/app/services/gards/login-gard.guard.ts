import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginAdminService } from '../account/login-admin.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginGardGuard implements CanActivate {
  constructor(public _loginService: LoginAdminService, public router: Router) {}

  canActivate(): Observable<boolean> {
    return this._loginService.getStatus().pipe(
      map(status => {
        if (status) {
          // console.log('Paso por el guard');
          return true;
        } else {
          this.router.navigate(['/login']);
          // console.log('bloqueado por el guard');
          return false;
        }
      })
    );
  }
}
