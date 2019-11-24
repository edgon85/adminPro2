import { Component, OnInit, Input } from '@angular/core';
import { ProductoModel } from '../../../../models/producto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  @Input() producto: ProductoModel;
  @Input() key: any;
  // @Input() index: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  dataProducto( producto: ProductoModel ) {
    // const categoria = producto.category.split(' ').join('-');
    // const subCategoria = producto.sub_category.split(' ').join('-');
    // this.router.navigate(['/product', categoria, subCategoria, producto.slug]);

    // console.log(producto);
    // this.prodSelec = producto;
    // $('.quick-view').modal();
  }

}
