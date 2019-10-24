import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginAdminService } from '../../../services/account/login-admin.service';
import { Router } from '@angular/router';
import { Usuario } from '../../../models/usuario.model';

declare function init_plugin_login();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  // password: string = null;
  cargando: boolean;

  constructor(
    public _loginAdminService: LoginAdminService
  ) {}

  ngOnInit() {
    init_plugin_login();
  }

  ingresar(forma: NgForm) {

    if (forma.invalid) {
      return;
    }

    let usuario = new Usuario(null, forma.value.email, forma.value.password);

    this._loginAdminService.loginWithEmail(usuario);
  }
}
