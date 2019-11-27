import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderAdminComponent } from './shared/header-admin/header-admin.component';
import { SidebarAdminComponent } from './shared/sidebar-admin/sidebar-admin.component';
import { BreadcrumbAdminComponent } from './shared/breadcrumb-admin/breadcrumb-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './pages/productos-admin/product/product.component';
import { CommonModule } from '@angular/common';
import { KeysPipe } from 'src/app/pipes/keys.pipe';
import { FormsModule } from '@angular/forms';
import { AvatarPipe } from '../../pipes/avatar.pipe';
import { ProductDetailComponent } from './pages/productos-admin/product/product-detail.component';
import { ModalUploadComponent } from './reutilizables/modal-upload/modal-upload.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ProductoContentAdminComponent } from './pages/productos-admin/producto-content-admin/producto-content-admin.component';

@NgModule({
  declarations: [
    HeaderAdminComponent,
    SidebarAdminComponent,
    BreadcrumbAdminComponent,
    DashboardComponent,
    ProductComponent,
    KeysPipe,
    AvatarPipe,
    ProductDetailComponent,
    ModalUploadComponent,
    UsuariosComponent,
    ProductoContentAdminComponent
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    HeaderAdminComponent,
    SidebarAdminComponent,
    BreadcrumbAdminComponent,
    DashboardComponent,
    ModalUploadComponent,
    AvatarPipe,
    KeysPipe
  ]
})
export class SharedAdminModule {}
