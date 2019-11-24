import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../admin/services/product.service';
import { ProductoModel } from '../../../../models/producto.model';
import { GetRutasService } from '../../../../services/rutas/get-rutas.service';

declare var $: any;

@Component({
  selector: 'app-producto-content',
  templateUrl: './producto-content.component.html',
  styleUrls: ['./producto-content.component.css']
})
export class ProductoContentComponent implements OnInit {
  productos: ProductoModel[] = [];

  categoria: string = '';
  subCategoria: string = '';
  titulo: string;

  prodSelec: any;

  video = '350398325';
  videoComplementos =
    '?autoplay=1&loop=1?title=1&amp;byline=0&amp;portrait=0&amp;color=ffffff';

  constructor(
    private _productoService: ProductService,
    private router: ActivatedRoute,
    private _getRutas: GetRutasService,
    private route: Router
  ) {
    this.obtenerParametrosUrl();

    this.obtenerUltimoParametro();
  }

  ngOnInit() {
    this.modificarTitulo();
    this.obtenerProductos(this.categoria);
  }

  // ========================================================== //
  // Obtener productos //
  // ========================================================== //
  obtenerProductos(categoria: string) {
    this._productoService.getAllProducts(categoria).subscribe((resp: any) => {
      this.productos = resp;
      // console.log(this.productos);
    });
  }

  // ========================================================== //
  // obtener parametros de la url //
  // ========================================================== //
  obtenerParametrosUrl() {
    this.router.parent.params.subscribe(parametros => {
      this.categoria = parametros.id.split('-').join(' ');
    });
  }

  // ========================================================== //
  // obtener el ultimo parametro de la url //
  // ========================================================== //
  obtenerUltimoParametro() {
    this._getRutas.getRutas().subscribe(resp => {
      this.subCategoria = resp.path.split('-').join(' ');
    });
  }

  // ========================================================== //
  // modificar titulo //
  // ========================================================== //
  modificarTitulo() {
    switch (this.subCategoria) {
      case 'ac4 83mm':
        this.titulo = 'AC4 8.3mm';
        break;
      case 'ac3 7mm':
        this.titulo = 'AC3 7mm';
        break;
      case 'ac5 12mm':
        this.titulo = 'AC5 12mm';
        break;
      case 'linoleo':
        this.titulo = 'Piso linóleo';
        break;
      default:
        this.titulo = this.subCategoria;
    }
  }


  // ========================================================== //
  // Mostar producto en modal //
  // ========================================================== //
  dataProducto(producto: ProductoModel) {
    this.prodSelec = producto;
    $('.quick-view').modal(); // abre el modal
  }

  // ========================================================== //
  // cierra modal y lleva a detalle del producto //
  // ========================================================== //
  verCategoria() {
    const categoria = this.prodSelec.category.split(' ').join('-');
    const subCategoria = this.prodSelec.sub_category.split(' ').join('-');

    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    $('.quick-view').modal('dispose');
    this.route.navigate([
      '/product',
      categoria,
      subCategoria,
      this.prodSelec.slug
    ]);
  }
}
