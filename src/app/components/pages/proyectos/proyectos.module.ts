import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ListaProyectosComponent } from './lista-proyectos/lista-proyectos.component';
import { ProyectoDetalleComponent } from './proyecto-detalle/proyecto-detalle.component';
import { SharedModule } from '../../shared/shared.module';
import { LightboxModule } from 'ngx-lightbox';
import { ReutilizablesModule } from '../reutilizables/reutilizables.module';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [ListaProyectosComponent, ProyectoDetalleComponent],
  imports: [
    CommonModule,
    ProyectosRoutingModule,
    SharedModule,
    LightboxModule,
    // ReutilizablesModule
    PipesModule
  ]
})
export class ProyectosModule {}
