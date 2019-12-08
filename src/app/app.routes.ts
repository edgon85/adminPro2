import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { LoginComponent } from './components/accounts/login/login.component';
import { PagesComponent } from './components/pages/pages.component';

// Sub rutas
import { PAGES_ROUTES } from './components/pages/pages.routes';
import { AdminComponent } from './components/admin/admin/admin.component';
import { LoginGardGuard } from './services/gards/login-gard.guard';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ProductComponent } from './components/admin/pages/productos-admin/product/product.component';
import { PRODUCTOS_ADMIN_ROUTES } from './components/admin/pages/productos-admin/productos-admin-routes';
import { UsuariosComponent } from './components/admin/pages/usuarios/usuarios.component';

const Routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: PagesComponent, children: PAGES_ROUTES },
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
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(Routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTERS, {
//   useHash: true,
//   scrollPositionRestoration: 'enabled'
// });
