import { Component, OnInit } from '@angular/core';
import { LoginAdminService } from '../../../../services/account/login-admin.service';
import { Usuario } from '../../../../models/usuario.model';
import { SidebarService } from '../../../../services/sidebar/sidebar.service';
import { UsuarioService } from '../../../../services/usuario/usuario.service';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styles: []
})
export class SidebarAdminComponent implements OnInit {

  usuario: Usuario;

  constructor(
    public _loginService: LoginAdminService,
    private _usuarioService: UsuarioService,
    public _sidebarService: SidebarService
    ) {
  }

  ngOnInit() {
    this.usuario = this._usuarioService.usuario;
  }

}
