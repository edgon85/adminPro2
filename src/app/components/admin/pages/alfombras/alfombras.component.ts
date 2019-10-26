import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductoModel } from '../../../../models/producto.model';
import { Router, ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.cargando = true;
    this.obtenerAlfombras();
  }

  buscarAlfombra() {}

  obtenerAlfombras() {
    this._productService.getAllProducts('alfombras').subscribe(
      (resp) => {
        this.productos = resp;
        this.totalProductos = this.productos.length;
        this.cargando = false;
      }
    );
  }


  nuevoProducto() {
    this.router.navigate(['../prod', 'alfombra'], {relativeTo: this.route});
  }

  borrarUsuario( id: string ) {

  }


  cambiarDesde() {}

}
