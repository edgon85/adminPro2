import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './pages/productos-admin/product/product.component';
import { PRODUCTOS_ADMIN_ROUTES } from './pages/productos-admin/productos-admin-routes';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
