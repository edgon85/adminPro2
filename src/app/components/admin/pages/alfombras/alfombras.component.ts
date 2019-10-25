import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductoModel } from '../../../../models/producto.model';

@Component({
  selector: 'app-alfombras',
  templateUrl: './alfombras.component.html',
  styleUrls: ['./alfombras.component.css']
})
export class AlfombrasComponent implements OnInit {

  productos: ProductoModel[] = [];
  totalProductos: number = 0;

  constructor( private _productService: ProductService) {
    this.obtenerAlfombras();
  }

  ngOnInit() {
  }

  buscarAlfombra() {}

  obtenerAlfombras() {
    this._productService.getAllProducts('alfombras').subscribe(
      (resp) => {
        this.productos = resp;
        this.totalProductos = this.productos.length;
        console.log(this.productos);
      }
    );
  }

  borrarUsuario( id: string ) {

  }


  cambiarDesde() {}

}
