import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { PagesComponent } from './pages.component';
import { AdminComponent } from '../admin/admin/admin.component';
import { SharedAdminModule } from '../admin/admin.module';
import { AlfombrasPagesComponent } from './productos/alfombras-pages/alfombras-pages.component';
import { GramaSinteticaPagesComponent } from './productos/grama-sintetica-pages/grama-sintetica-pages.component';

@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    AdminComponent,
    AlfombrasPagesComponent,
    GramaSinteticaPagesComponent
  ],
  imports: [
    SharedModule,
    SharedAdminModule,
    PAGES_ROUTES
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
