import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { ActivationEnd, Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../admin/services/product.service';
import { ProductoModel } from '../../../../models/producto.model';

@Component({
  selector: 'app-producto-content',
  templateUrl: './producto-content.component.html',
  styleUrls: ['./producto-content.component.css']
})
export class ProductoContentComponent implements OnInit {

  productos: ProductoModel[] = [];

  categoria: string = '';
  subCategoria: string = '';

  constructor(
    private _productoService: ProductService,
    public route: Router, private router: ActivatedRoute) {

      this.router.parent.params.subscribe(
        (parametros) => {
          // console.log(parametros.id);
          this.categoria = parametros.id.split('-').join(' ');
        }
      );

      this.getRutas().subscribe(
            (resp) => {
              this.subCategoria = resp.path.split('-').join(' ');
              // console.log(resp.path);
            }
          );
    }

  ngOnInit() {
    // console.log('Categoria =>' + this.categoria);
    // console.log('Sub categoria =>' + this.subCategoria);
    this.obtenerProductos(this.categoria);
  }

  obtenerProductos(categoria: string) {
    this._productoService.getAllProducts(categoria).subscribe(
      (resp: any) => {
        this.productos = resp;
        // console.log(this.productos);
      }
    );
  }


  getRutas() {
   return this.route.events.pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento: ActivationEnd) => evento.snapshot.routeConfig)
      );
  }
}
