import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ProductoModel } from '../../../../../models/producto.model';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { GetRutasService } from 'src/app/services/rutas/get-rutas.service';

@Component({
  selector: 'app-producto-content-admin',
  templateUrl: './producto-content-admin.component.html',
  styleUrls: ['./producto-content-admin.component.css']
})
export class ProductoContentAdminComponent implements OnInit {
  productos: ProductoModel[] = [];
  totalProductos: number = 0;
  cargando: boolean = false;

  categoria: string = '';
  subCategoria: string = '';
  titulo: string;

  constructor(
    private _productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private _getRutas: GetRutasService
  ) {
    this.obtenerUltimoParametro();
  }

  ngOnInit() {
    // console.log('Sub cat =>' + this.subCategoria);
    this.cargando = true;
    this.obtenerAlfombras(this.subCategoria);
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

  obtenerAlfombras(categoria: string) {
    this._productService.getAllProducts(categoria).subscribe(resp => {
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
          this.obtenerAlfombras(this.subCategoria);
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

  // ========================================================== //
  // obtener el ultimo parametro de la url //
  // ========================================================== //
  obtenerUltimoParametro() {
    this._getRutas.getRutas().subscribe(resp => {
      this.subCategoria = resp.path.split('-').join(' ');
    });
  }
}
