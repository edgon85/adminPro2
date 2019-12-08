import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleRoutingModule } from './detalle-routing.module';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { SharedModule } from '../../../shared/shared.module';
import { ReutilizablesModule } from '../../reutilizables/reutilizables.module';

@NgModule({
  declarations: [ProductoDetalleComponent],
  imports: [
    CommonModule,
    DetalleRoutingModule,
    SharedModule,
    ReutilizablesModule
  ]
})
export class DetalleModule {}
