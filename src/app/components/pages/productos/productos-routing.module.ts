import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoPageComponent } from './producto-page/producto-page.component';
import { PRODUCTOS_ROUTES } from './productos.routes';

const routes: Routes = [
  {
    path: ':id',
    component: ProductoPageComponent,
    children: PRODUCTOS_ROUTES,
    data: { title: 'Sub Categoria' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule {}
