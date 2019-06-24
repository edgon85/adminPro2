import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginAdminService } from '../../../services/account/login-admin.service';
import { Router } from '@angular/router';

declare function init_plugin_login();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = null;
  password: string = null;

  constructor( private _loginAdminService: LoginAdminService, private router: Router) { }

  ngOnInit() {
    init_plugin_login();
  }

  ingresar( data: NgForm ) {
    this.email = data.value.email;
    this.password = data.value.password;

    if ( this.email === 'admin' && this.password === '123456') {
      this.router.navigate(['/admin']);
    }
  }

}
