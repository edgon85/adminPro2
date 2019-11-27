import { Routes } from '@angular/router';
import { ProductDetailComponent } from './product/product-detail.component';
import { ProductoContentAdminComponent } from './producto-content-admin/producto-content-admin.component';

export const PRODUCTOS_ADMIN_ROUTES: Routes = [
  {
    path: 'prod/:id',
    component: ProductDetailComponent,
    data: { title: 'Producto' }
  },
  {
    path: 'alfombras',
    component: ProductoContentAdminComponent,
    data: { title: 'Alfombras' }
  },
  {
    path: 'atrapamugre',
    component: ProductoContentAdminComponent,
    data: { title: 'Alfombras atrapamugre' }
  },
  {
    path: 'cortinas',
    component: ProductoContentAdminComponent,
    data: { title: 'Cortinas' }
  },
  {
    path: 'grama-sintetica',
    component: ProductoContentAdminComponent,
    data: { title: 'Grama sintética' }
  },
  {
    path: 'linoleo',
    component: ProductoContentAdminComponent,
    data: { title: 'linóleo' }
  },
  {
    path: 'papel-tapiz',
    component: ProductoContentAdminComponent,
    data: { title: 'Papel tapiz' }
  },
  {
    path: 'piso-laminado',
    component: ProductoContentAdminComponent,
    data: { title: 'Piso laminado' }
  }
];
