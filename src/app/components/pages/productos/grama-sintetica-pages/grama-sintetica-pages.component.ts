import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../admin/services/product.service';
import { ProductoModel } from '../../../../models/producto.model';

@Component({
  selector: 'app-grama-sintetica-pages',
  templateUrl: './grama-sintetica-pages.component.html',
  styleUrls: ['./grama-sintetica-pages.component.css']
})
export class GramaSinteticaPagesComponent implements OnInit {

  productos: ProductoModel[] = [];

  constructor(private _productoService: ProductService) { }

  ngOnInit() {
    this.obtenerProductos();
  }


  obtenerProductos() {
    this._productoService.getAllProducts('grama sintetica').subscribe(
      (resp: any) => {
        this.productos = resp;
        // console.log(this.productos);
      }
    );
  }
}
