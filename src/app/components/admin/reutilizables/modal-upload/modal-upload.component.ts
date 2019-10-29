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
    const imgName = this._modalUploadService.id + '-' + Date.now();

    const file = this.imagenSubir;
    // const filePath = 'images/productos/' + this.slug;
    const filePath = `images/productos/${this._modalUploadService.tipo}/${imgName}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(resp => {
            let imgData = this._modalUploadService.imgData;
            let _id = this._modalUploadService.id;

            // console.log(this._modalUploadService.oldImageUrl);
            this._productService
              .updateImage(_id, imgData, resp)
              .subscribe((data: any) => {
                this._modalUploadService.notificacion.emit(data);

                if ( !this._modalUploadService.oldImageUrl ) {
                  return;
                }
                this.eliminarImagen(this._modalUploadService.oldImageUrl);
              });

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
  // Limpia el nombre del input file con un @ViewChild
  // ================================================= //
  eliminarImagen(downloadUrl: string) {
    return this.storage.storage.refFromURL(downloadUrl).delete();
  }
}
