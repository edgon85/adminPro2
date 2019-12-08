import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';

const routes: Routes = [
  {
    path: ':cat/:subcat/:prodId',
    component: ProductoDetalleComponent,
    data: { title: 'Detalle' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleRoutingModule {}
