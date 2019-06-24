import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { LoginAdminService } from '../account/login-admin.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGardGuard implements CanActivate {

  constructor(public _loginService: LoginAdminService, public router: Router) {}

  canActivate(): boolean {

    if (this._loginService.estaLogueado) {
      console.log('paso por el login guard');
      return true;
    } else {
      console.log('Bloqueado por el guard ' +  this._loginService.estaLogueado);
      this.router.navigate(['/login']);
      return false;
    }
  }
}
