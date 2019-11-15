import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../../../../models/producto.model';
import { ProductService } from '../../../admin/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  productos: ProductoModel[] = [];
  categoria: string = '';

  constructor(
    private _productoService: ProductService,
    private router: ActivatedRoute
  ) {
    this.obtenerParametrosUrl();
  }

  ngOnInit() {
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
}
