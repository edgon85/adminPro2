import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { PagesComponent } from './components/pages/pages.component';

// Sub rutas
import { PAGES_ROUTES } from './components/pages/pages.routes';
import { LoginGardGuard } from './services/gards/login-gard.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./components/accounts/accounts.module').then(
        m => m.AccountsModule
      )
  },
  { path: '', component: PagesComponent, children: PAGES_ROUTES },
  {
    path: 'admin',
    canActivate: [LoginGardGuard],
    loadChildren: () =>
      import('./components/admin/admin.module').then(m => m.AdminModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      useHash: true,
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
