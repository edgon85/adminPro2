import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../admin/services/product.service';
import { ProductoModel } from '../../../../models/producto.model';

@Component({
  selector: 'app-alfombras-pages',
  templateUrl: './alfombras-pages.component.html',
  styleUrls: ['./alfombras-pages.component.css']
})
export class AlfombrasPagesComponent implements OnInit {

  productos: ProductoModel[] = [];

  urlFondo: string = 'assets/page/img/casa/fondo_2.png';

  constructor( private _alfombraService: ProductService) { }

  ngOnInit() {
    this.obtenerProductos();
  }


  obtenerProductos() {
    this._alfombraService.getAllProducts('alfombras').subscribe(
      (resp: any) => {
        this.productos = resp;
        // console.log(this.productos);
      }
    );
  }


  cambiarAlfombra(imagen: string) {
    if (imagen === '') {
      return this.urlFondo;
    }
    this.urlFondo = imagen;
    // console.log(this.urlFondo);
  }
}
