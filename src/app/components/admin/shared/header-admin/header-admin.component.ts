import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAdminService } from '../../../../services/account/login-admin.service';
import { Usuario } from '../../../../models/usuario.model';
import { UsuarioService } from '../../../../services/usuario/usuario.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  usuario: Usuario;

  constructor(
    private _loginService: LoginAdminService,
    private _usuarioService: UsuarioService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.usuario = this._usuarioService.usuario;
  }

  serrarSesion() {
    this._loginService.logout()
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
