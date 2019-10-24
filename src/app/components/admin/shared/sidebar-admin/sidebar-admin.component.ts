import { Component, OnInit } from '@angular/core';
import { LoginAdminService } from '../../../../services/account/login-admin.service';
import { Usuario } from '../../../../models/usuario.model';
import { SidebarService } from '../../../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styles: []
})
export class SidebarAdminComponent implements OnInit {

  usuario: Usuario;

  constructor(
    public _loginService: LoginAdminService,
    public _sidebarService: SidebarService
    ) {
  }

  ngOnInit() {
    this.usuario = this._loginService.usuario;
  }

}
