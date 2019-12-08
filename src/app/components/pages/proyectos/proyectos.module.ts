import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ListaProyectosComponent } from './lista-proyectos/lista-proyectos.component';
import { ProyectoDetalleComponent } from './proyecto-detalle/proyecto-detalle.component';
import { SharedModule } from '../../shared/shared.module';
import { SharedAdminModule } from '../../admin/admin.module';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  declarations: [ListaProyectosComponent, ProyectoDetalleComponent],
  imports: [
    CommonModule,
    ProyectosRoutingModule,
    SharedModule,
    SharedAdminModule,
    LightboxModule
  ]
})
export class ProyectosModule {}
