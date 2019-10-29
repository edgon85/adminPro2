import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadModalService {

  public tipo: string;
  public id: string;
  public imgData: string;
  public oldImageUrl: string;

  public oculto: string = 'oculto';

  public notificacion = new EventEmitter<any>();

  constructor() { }

  // ================================================= //
  // ocultar el modal
  // ================================================= //
  ocultarModal() {
    this.oculto = 'oculto';
    this.id = null;
    this.tipo = null;
  }

  // ================================================= //
  // mostrar Modal
  // ================================================= //
  mostrarModal( tipo: string, id: string, imgData: string, oldImageUrl: string ) {
    this.oculto = '';
    this.id = id;
    this.tipo = tipo;
    this.imgData = imgData;
    this.oldImageUrl = oldImageUrl;
  }
}
