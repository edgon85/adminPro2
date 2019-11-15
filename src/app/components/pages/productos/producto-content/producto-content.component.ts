import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { ActivationEnd, Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../admin/services/product.service';
import { ProductoModel } from '../../../../models/producto.model';
import { GetRutasService } from '../../../../services/rutas/get-rutas.service';

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

  constructor(
    private _productoService: ProductService,
    private router: ActivatedRoute,
    private _getRutas: GetRutasService
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
}
