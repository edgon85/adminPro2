import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ProductoModel } from '../../../../models/producto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-piso-laminado',
  templateUrl: './piso-laminado.component.html',
  styles: []
})
export class PisoLaminadoComponent implements OnInit {

  productos: ProductoModel[] = [];
  totalProductos: number = 0;

  cargando: boolean = false;


  constructor(
    private _productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.cargando = true;
    this.obtenerProductos();
  }

  obtenerProductos() {
    this._productService.getAllProducts('piso laminado').subscribe(resp => {
      this.productos = resp;
      this.totalProductos = this.productos.length;
      this.cargando = false;
    });
  }

  // =========================================================================
  // Enviar a pag nuevo producto
  // =========================================================================
  nuevoProducto() {
    this.router.navigate(['../prod', 'nuevo'], { relativeTo: this.route });
  }
  // =========================================================================

  // =================================================
  // Eliminar un producto
  // =================================================
  eliminarProducto(producto: ProductoModel) {
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
        // console.log( producto.image.portada );
        this._productService.deleteProduct(producto.slug).subscribe(() => {
          // tslint:disable-next-line:forin
          for (let i in producto.image) {
            this.eliminarImagen(producto.image[i]);
          }
          this.obtenerProductos();
          Swal.fire('Eliminado!', 'Producto ha sido eliminado.', 'success');
        });
      }
    });
  }
  // =================================================

  // =================================================
  // Eliminar una imagen
  // =================================================
  eliminarImagen(urlImage: string) {
    this._productService.deleteImage(urlImage);
  }

}
