import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAdminService } from '../../../../services/account/login-admin.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  constructor(
    private _authService: LoginAdminService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  serrarSesion() {
    this._authService.logout()
    .then(
      (resp) => {
        console.log('Sesion crerrada!' , resp);
      this.router.navigate(['/login']);
    })
    .catch(
      (error) => {
        console.log( error );
      });
  }

}
