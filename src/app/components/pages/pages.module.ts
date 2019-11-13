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
import { AvatarPipe } from '../../pipes/avatar.pipe';
import { FilterProductPipe } from '../../pipes/filter-product.pipe';
import { CardProductComponent } from './reutilizables/card-product/card-product.component';
import { ProductoDetalleComponent } from './productos/detalle/producto-detalle/producto-detalle.component';
import { ProductoPageComponent } from './productos/producto-page/producto-page.component';
import { ProductoContentComponent } from './productos/producto-content/producto-content.component';

@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    AdminComponent,
    AlfombrasPagesComponent,
    GramaSinteticaPagesComponent,
    FilterProductPipe,
    CardProductComponent,
    ProductoDetalleComponent,
    ProductoPageComponent,
    ProductoContentComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SharedAdminModule,
    PAGES_ROUTES
  ],
  exports: [
    PagesComponent,
    FilterProductPipe,
  ]
})
export class PagesModule { }
