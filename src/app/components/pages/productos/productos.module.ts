import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductoPageComponent } from './producto-page/producto-page.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ProductoContentComponent } from './producto-content/producto-content.component';
import { SharedModule } from '../../shared/shared.module';
import { ReutilizablesModule } from '../reutilizables/reutilizables.module';
import { CardProductComponent } from '../reutilizables/card-product/card-product.component';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    ProductoPageComponent,
    ProductoContentComponent,
    GaleriaComponent,
    CardProductComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    SharedModule,
    ReutilizablesModule,
    PipesModule
  ]
})
export class ProductosModule {}
