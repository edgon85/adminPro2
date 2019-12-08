import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProyectosComponent } from './lista-proyectos/lista-proyectos.component';
import { ProyectoDetalleComponent } from './proyecto-detalle/proyecto-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: ListaProyectosComponent,
    data: { title: 'Nuestos proyectos' }
  },
  {
    path: ':id',
    component: ProyectoDetalleComponent,
    data: { title: 'Proyecto detalle' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule {}
