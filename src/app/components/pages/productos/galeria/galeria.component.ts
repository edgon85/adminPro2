import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../../../../models/producto.model';
import { ProductService } from '../../../admin/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  productos: ProductoModel[] = [];
  categoria: string = '';

  prodSelec: any;

  cargando: boolean = false;

  constructor(
    private _productoService: ProductService,
    private router: ActivatedRoute,
    private route: Router
  ) {
    this.obtenerParametrosUrl();
  }

  ngOnInit() {
    this.cargando = true;
    this.obtenerProductos();
  }

  // ========================================================== //
  // obtener todos los productos //
  // ========================================================== //
  obtenerProductos() {
    this._productoService
      .getAllProducts(this.categoria)
      .subscribe((resp: any) => {
        this.productos = resp;
        this.cargando = false;
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
