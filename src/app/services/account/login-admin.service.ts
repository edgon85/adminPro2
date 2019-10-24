import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../../models/usuario.model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginAdminService {

  usuario: Usuario;
  cargando: boolean = false;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.cargarStorage();
  }

  // ================================================================ //
  // Login gon correo y contraseña //
  // ================================================================ //
  public loginWithEmail(usuario: Usuario) {
    this.cargando = true;
    return this.angularFireAuth.auth
      .signInWithEmailAndPassword(usuario.email, usuario.password)
      .then(resp => {
        // console.log(resp.user.uid);
        this.getUserById(resp.user.uid).subscribe(data => {
          this.usuario = data;
          this.cargando = false;
          this.guardarStorage(resp.user.uid, this.usuario);
          this.router.navigate(['/admin']);
        });
      })
      .catch(err => {
        this.cargando = false;
        Swal.fire({
          type: 'error',
          title: 'Algo salio mal!',
          text: 'Contraseña o correo incorrecto'
        });
      });
  }

  // ================================================================ //
  // Obtener usuario por uid //
  // ================================================================ //
  public getUserById(uid: string) {
    return this.afs.doc<Usuario>(`usuarios/${uid}`).valueChanges();
  }

  // ========================================= //
  // Obtener el estado del usuario //
  // ========================================= //
  public getStatus() {
    return this.angularFireAuth.authState;
  }

  // ========================================= //
  // cerrar sesión //
  // ========================================= //
  public logout() {
    this.usuario = null;

    localStorage.removeItem('uid');
    localStorage.removeItem('usuario');
    return this.angularFireAuth.auth.signOut();
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
