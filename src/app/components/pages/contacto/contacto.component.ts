import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import Swal from 'sweetalert2';
declare function initMap();

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  data: any = {
    name: '',
    email: '',
    message: '',
    timestamp: null
  };

  date: any = new Date();

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    initMap();
  }

  enviarMensaje(forma: NgForm) {
    this.data = {
      name: forma.value.name.trim(),
      email: forma.value.email.trim(),
      message: forma.value.message,
      timestamp: this.date
    };

    if (forma.invalid) {
      return;
    }

    console.log(this.data);
    this.afs
      .collection('mensajes')
      .add(this.data)
      .then(resp => {
        Swal.fire(
          'Mensaje enviado!',
          'Pronto nos comunicaremos con usted!',
          'success'
        );

        this.data = {
          name: '',
          email: '',
          message: '',
          timestamp: null
        };
      });
  }

  // newMessageContact( message: any ) {
  //   return this.afs.collection('messages').add(message);
  // }
}
