import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from '../admin/admin/admin.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { LoginGardGuard } from '../../services/gards/login-gard.guard';
import { ProductComponent } from '../admin/pages/productos-admin/product/product.component';
import { UsuariosComponent } from '../admin/pages/usuarios/usuarios.component';
import { AlfombrasPagesComponent } from './productos/alfombras-pages/alfombras-pages.component';
import { ProductoPageComponent } from './productos/producto-page/producto-page.component';
import { ProductoDetalleComponent } from './productos/detalle/producto-detalle/producto-detalle.component';
import { PRODUCTOS_ROUTES } from './productos/productos.routes';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ListaProyectosComponent } from './proyectos/lista-proyectos/lista-proyectos.component';
import { ProyectoDetalleComponent } from './proyectos/proyecto-detalle/proyecto-detalle.component';
import { PRODUCTOS_ADMIN_ROUTES } from '../admin/pages/productos-admin/productos-admin-routes';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'inicio', component: HomeComponent, data: { title: 'Inicio' } },
      {
        path: 'alfombras',
        component: AlfombrasPagesComponent,
        data: { title: 'Alfombras' }
      },
      {
        path: 'producto/:id',
        component: ProductoPageComponent,
        children: PRODUCTOS_ROUTES,
        data: { title: 'Sub Categoria' }
      },
      {
        path: 'product/:cat/:subcat/:prodId',
        component: ProductoDetalleComponent,
        data: { title: 'Detalle' }
      },
      {
        path: 'nosotros',
        component: NosotrosComponent,
        data: { title: 'Quienes somos' }
      },
      {
        path: 'contacto',
        component: ContactoComponent,
        data: { title: 'Contáctanos' }
      },
      {
        path: 'proyectos',
        component: ListaProyectosComponent,
        data: { title: 'Nuestos proyectos' }
      },
      {
        path: 'proyectos/:id',
        component: ProyectoDetalleComponent,
        data: { title: 'Proyecto detalle' }
      },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [LoginGardGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: 'Dashboard' }
      },
      //  router de productos en admin
      {
        path: 'productos',
        component: ProductComponent,
        children: PRODUCTOS_ADMIN_ROUTES
      },
      {
        path: 'usuarios',
        component: UsuariosComponent,
        data: { title: 'Usuarios' }
      },
      { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
