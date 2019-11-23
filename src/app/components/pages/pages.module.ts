import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { PagesComponent } from './pages.component';
import { AdminComponent } from '../admin/admin/admin.component';
import { SharedAdminModule } from '../admin/admin.module';
import { AlfombrasPagesComponent } from './productos/alfombras-pages/alfombras-pages.component';
import { FilterProductPipe } from '../../pipes/filter-product.pipe';
import { CardProductComponent } from './reutilizables/card-product/card-product.component';
import { ProductoDetalleComponent } from './productos/detalle/producto-detalle/producto-detalle.component';
import { ProductoPageComponent } from './productos/producto-page/producto-page.component';
import { ProductoContentComponent } from './productos/producto-content/producto-content.component';
import { GaleriaComponent } from './productos/galeria/galeria.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule } from '@angular/forms';
import { ListaProyectosComponent } from './proyectos/lista-proyectos/lista-proyectos.component';
import { ProyectoDetalleComponent } from './proyectos/proyecto-detalle/proyecto-detalle.component';

import { LightboxModule } from 'ngx-lightbox';
import { DomseguroPipe } from '../../pipes/domseguro.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    AdminComponent,
    AlfombrasPagesComponent,
    FilterProductPipe,
    CardProductComponent,
    ProductoDetalleComponent,
    ProductoPageComponent,
    ProductoContentComponent,
    GaleriaComponent,
    NosotrosComponent,
    ContactoComponent,
    ListaProyectosComponent,
    ProyectoDetalleComponent,
    DomseguroPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    SharedAdminModule,
    PAGES_ROUTES,
    LightboxModule
  ],
  exports: [
    PagesComponent,
    FilterProductPipe,
  ]
})
export class PagesModule { }
