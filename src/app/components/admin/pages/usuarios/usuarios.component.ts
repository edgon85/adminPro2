import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../models/usuario.model';
import { UsuarioService } from '../../../../services/usuario/usuario.service';
import { UploadModalService } from '../../../../services/modal/upload-modal.service';
import Swal from 'sweetalert2';

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
  borrarUsuario(usuario: Usuario) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sí, bórralo!'
    }).then(result => {
      if (result.value) {
        // console.log( usuario.uid );
        this._usuarioService.deleteUser(usuario.uid);
        // this._productService.deleteProduct(producto.slug).subscribe(() => {
        //   // tslint:disable-next-line:forin
        //   for (let i in producto.image) {
        //     this.eliminarImagen(producto.image[i]);
        //   }
        //   this.obtenerAlfombras();
        //   Swal.fire('Eliminado!', 'Producto ha sido eliminado.', 'success');
        // });
      }
    });
  }



  mostarModal( imgPath: string, usuario: Usuario ) {
    // console.log(imgPath);
    this._mostrarModal.mostrarModal('usuario', usuario.uid, imgPath, usuario.img);
  }
}
