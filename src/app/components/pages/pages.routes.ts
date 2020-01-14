import { Routes } from '@angular/router';

export const PAGES_ROUTES: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'alfombras-galeria',
    loadChildren: () =>
      import('./productos/alfombras-pages/alfombras.module').then(
        m => m.AlfombrasModule
      )
  },
  {
    path: 'producto',
    loadChildren: () =>
      import('./productos/productos.module').then(m => m.ProductosModule)
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./productos/detalle/detalle.module').then(m => m.DetalleModule)
  },
  {
    path: 'nosotros',
    loadChildren: () =>
      import('./nosotros/nosotros.module').then(m => m.NosotrosModule)
  },
  {
    path: 'contacto',
    loadChildren: () =>
      import('./contacto/contacto.module').then(m => m.ContactoModule)
  },
  {
    path: 'proyectos',
    loadChildren: () =>
      import('./proyectos/proyectos.module').then(m => m.ProyectosModule)
  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];
