import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../../models/usuario.model';
import Swal from 'sweetalert2';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario: Usuario;

  constructor(
    private afs: AngularFirestore,
    private angularFireAuth: AngularFireAuth) {
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
  public updateImageUsuario(
    id: string,
    imageIdJSON: any,
    imagePathJson: string
  ) {
    let imageData: any = {}; // es de tipo object
    imageData[imageIdJSON] = imagePathJson;
    return this.afs.doc(`usuarios/${id}`).update(imageData)
    .then(
      (resp) => {
        if ( this.usuario.uid === id) {
          this.usuario.img = imageData.img;
          this.guardarStorage(id, this.usuario);
        }
      }
    );
  }
  // ================================== //

  // ================================== //
  // Eliminar usuario
  // ================================== //
  public deleteUser(uid: string) {
    if (uid === this.usuario.uid) {
      Swal.fire('ups', 'No se puede eliminar asi mismo ;)');
    } else {
      Swal.fire('ups', 'No Disponible');
    }
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
