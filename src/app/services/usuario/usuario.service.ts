import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../../models/usuario.model';
import { LoginAdminService } from '../account/login-admin.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario: Usuario;

  constructor(private afs: AngularFirestore) {
    this.cargarStorage();
  }

  public getUsers() {
    return this.afs.collection('usuarios').valueChanges();
  }

  public updateUserRole(docId: string, usuario: Usuario) {
    return this.afs
      .doc(`usuarios/${docId}`)
      .update(usuario)
      .then((resp: any) => {
        if (usuario.uid === this.usuario.uid) {
          this.guardarStorage(usuario.uid, usuario);
        }

        Swal.fire({
          title: 'Usuario Actualizado',
          text: usuario.nombre + ' ahora es ' + usuario.role,
          type: 'success'
        });
      })
      .catch(err => {
        Swal.fire({
          title: err.error.mensaje,
          text: err.error.errors.message,
          type: 'error'
        });
        return throwError(err.message);
      });
  }

  // ================================== //
  // Guardar en storage
  // ================================== //
  guardarStorage(uid: string, usuario: Usuario) {
    localStorage.setItem('uid', uid);
    // JSON.stringify convierte el objeto en un string
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;
  }

  // ================================== //
  // Cargar del storage
  // ================================== //
  cargarStorage() {
    if (localStorage.getItem('uid')) {
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.usuario = null;
      // this.menu = [];
    }
  }
}
