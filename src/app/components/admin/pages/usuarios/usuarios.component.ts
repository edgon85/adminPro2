import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../models/usuario.model';
import { UsuarioService } from '../../../../services/usuario/usuario.service';
import { UploadModalService } from '../../../../services/modal/upload-modal.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];

  totalRegistros: number = 0;
  cargando: boolean = false;

  constructor(
    private _usuarioService: UsuarioService,
    private _mostrarModal: UploadModalService) {}

  ngOnInit() {
    this.cargarUsuarios();
  }

  // =================================================//
  // obtener todos los usuarios
  // =================================================//
  cargarUsuarios() {
    this.cargando = true;

    this._usuarioService.getUsers().subscribe((resp: any) => {
      this.usuarios = resp;
      this.cargando = false;
      this.totalRegistros = this.usuarios.length;
    });
  }

  // ========================================
  // Actualizar usuario
  // ========================================
  actualizarRoleUsuario(usuario: Usuario) {
    // console.log(usuario.uid);
    this._usuarioService.updateUserRole(usuario.uid, usuario);
  }

  // ========================================
  // Borrar usuario
  // ========================================
  borrarUsuario(usuario: Usuario) {}



  mostarModal( imgPath: string, usuario: Usuario ) {
    // console.log(imgPath);
    this._mostrarModal.mostrarModal('usuario', usuario.uid, imgPath, usuario.img);
  }
}
