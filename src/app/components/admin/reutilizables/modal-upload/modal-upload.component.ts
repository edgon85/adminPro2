import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { UploadModalService } from '../../../../services/modal/upload-modal.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.css']
})
export class ModalUploadComponent implements OnInit {
  imagenSubir: File;
  imagenTemp: string | ArrayBuffer;

  cargando: boolean = false;

  @ViewChild('inputFile', { static: false }) inputFile: any;

  constructor(
    public _modalUploadService: UploadModalService,
    private _productService: ProductService,
    private storage: AngularFireStorage
  ) {}

  ngOnInit() {}

  // ================================================= //
  // Seleccionar una imagen
  // ================================================= //
  seleccionImage(archivo: File) {
    if (!archivo) {
      this.imagenSubir = null;
      return;
    }

    if (archivo.type.indexOf('image') < 0) {
      // swal('Sólo imágenes', 'El archivo seleccionado no es una imagen', 'error');
      Swal.fire({
        title: 'Sólo imágenes',
        text: 'El archivo seleccionado no es una imagen',
        type: 'error'
      });
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;

    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => (this.imagenTemp = reader.result);
  }

  // ================================================= //
  // Actualizar imagne
  // ================================================= //
  subirImagen() {
    this.cargando = true;
    const imgName = this._modalUploadService.id + '-' + Date.now();
    let tipoImagen: string;

    if (this._modalUploadService.tipo === 'usuario') {
      tipoImagen = `usuario/${this._modalUploadService.id}/${imgName}`;
    } else {
      tipoImagen = `productos/${this._modalUploadService.tipo}/${this._modalUploadService.id}/${imgName}`;
    }

    const file = this.imagenSubir;
    const filePath = `images/${tipoImagen}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(resp => {
            let imgData = this._modalUploadService.imgData;
            let _id = this._modalUploadService.id;
            let imgTipo = this._modalUploadService.tipo;

            // console.log(this._modalUploadService.oldImageUrl);

            if (imgTipo === 'usuario') {
              this._productService
                .updateImageUsuario(_id, imgData, resp)
                .then(() => {
                  this.cargando = false;
                  if (!this._modalUploadService.oldImageUrl) {
                    return;
                  }
                  this.eliminarImagen(this._modalUploadService.oldImageUrl);
                });
            } else {
              this._productService
                .updateImageProducto(_id, imgData, resp)
                .subscribe((data: any) => {
                  this._modalUploadService.notificacion.emit(data);

                  this.cargando = false;
                  if (!this._modalUploadService.oldImageUrl) {
                    return;
                  }
                  this.eliminarImagen(this._modalUploadService.oldImageUrl);
                });
            }

            this.clearForm();
            this.cerrarModal();
          });
        })
      )
      .subscribe();
  }

  // ================================================= //
  // Cerrar el modal
  // ================================================= //
  cerrarModal() {
    this.imagenTemp = null;
    this.imagenSubir = null;

    this._modalUploadService.ocultarModal();
  }

  // ================================================= //
  // Limpia el nombre del input file con un @ViewChild
  // ================================================= //
  clearForm() {
    // console.log('Aqui obtienes el elemento para atribuir algo vacio: ', this.inputFile.nativeElement);
    this.inputFile.nativeElement.value = '';
  }

  // ================================================= //
  // Eliminar imagen
  // ================================================= //
  eliminarImagen(downloadUrl: string) {
    return this._productService.deleteImage(downloadUrl);
    // return this.storage.storage.refFromURL(downloadUrl).delete();
  }
}
