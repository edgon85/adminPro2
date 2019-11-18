import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../admin/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ProductoModel } from '../../../../../models/producto.model';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  producto: ProductoModel;

  catUrl: string;
  subCatUrl: string;

  constructor(
    private _productoService: ProductService,
    private activatedRouter: ActivatedRoute
  ) {
    this.activatedRouter.params.subscribe(param => {
      this.obtenerProductos(param['prodId']);
      this.catUrl = param['cat'];
      this.subCatUrl = param['subcat'];
    });
  }

  ngOnInit() {}

  // ========================================================== //
  // Obtener productos //
  // ========================================================== //
  obtenerProductos(prodId: string) {
    this._productoService.getProduct(prodId).subscribe((resp: any) => {
      this.producto = resp;
    });
  }
}
