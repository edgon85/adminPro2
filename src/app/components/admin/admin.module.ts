import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { PipesModule } from '../../pipes/pipes.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminSharedModule } from './shared/admin-shared.module';

import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './pages/productos-admin/product/product.component';
import { ProductDetailComponent } from './pages/productos-admin/product/product-detail.component';
import { ModalUploadComponent } from './reutilizables/modal-upload/modal-upload.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ProductoContentAdminComponent } from './pages/productos-admin/producto-content-admin/producto-content-admin.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ProductComponent,
    ProductDetailComponent,
    ModalUploadComponent,
    UsuariosComponent,
    ProductoContentAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    AdminSharedModule,
    FormsModule,
    PipesModule
  ]
})
export class AdminModule {}
