import { Component, OnInit, Input } from '@angular/core';
import { ProductoModel } from '../../../../models/producto.model';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  @Input() producto: ProductoModel;
  @Input() key: any;
  @Input() index: string;

  constructor() { }

  ngOnInit() {
  }

  dataProducto( producto: ProductoModel ) {
    console.log(producto);
  }

}
