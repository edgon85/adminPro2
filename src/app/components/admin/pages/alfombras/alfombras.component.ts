import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductoModel } from '../../../../models/producto.model';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alfombras',
  templateUrl: './alfombras.component.html',
  styleUrls: ['./alfombras.component.css']
})
export class AlfombrasComponent implements OnInit {
  productos: ProductoModel[] = [];
  totalProductos: number = 0;
  cargando: boolean = false;

  constructor(
    private _productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.cargando = true;
    this.obtenerAlfombras();
  }

  // buscarAlfombra(termino: string) {
  //   if ( termino.length <= 0) {
  //     this.obtenerAlfombras();
  //     return;
  //   }

  //   this._productService.search(termino).subscribe(
  //     (resp) => {
  //      console.log(resp);
  //     }
  //   );
  // }

  obtenerAlfombras() {
    this._productService.getAllProducts('alfombras').subscribe(resp => {
      this.productos = resp;
      this.totalProductos = this.productos.length;
      this.cargando = false;
    });
  }

  nuevoProducto() {
    this.router.navigate(['../prod', 'nuevo'], { relativeTo: this.route });
  }

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
          this.obtenerAlfombras();
          Swal.fire('Eliminado!', 'Producto ha sido eliminado.', 'success');
        });
      }
    });
  }
  // =================================================

  eliminarImagen(urlImage: string) {
    this._productService.deleteImage(urlImage);
  }

  cambiarDesde() {}
}
