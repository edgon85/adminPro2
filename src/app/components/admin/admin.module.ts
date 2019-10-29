import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderAdminComponent } from './shared/header-admin/header-admin.component';
import { SidebarAdminComponent } from './shared/sidebar-admin/sidebar-admin.component';
import { BreadcrumbAdminComponent } from './shared/breadcrumb-admin/breadcrumb-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './pages/product/product.component';
import { CommonModule } from '@angular/common';
import { KeysPipe } from 'src/app/pipes/keys.pipe';
import { FormsModule } from '@angular/forms';
import { AvatarPipe } from '../../pipes/avatar.pipe';
import { AlfombrasComponent } from './pages/alfombras/alfombras.component';
import { AtrapamugreComponent } from './pages/atrapamugre/atrapamugre.component';
import { ProductDetailComponent } from './pages/product/product-detail.component';
import { ModalUploadComponent } from './reutilizables/modal-upload/modal-upload.component';

@NgModule({
  declarations: [
    HeaderAdminComponent,
    SidebarAdminComponent,
    BreadcrumbAdminComponent,
    DashboardComponent,
    ProductComponent,
    KeysPipe,
    AvatarPipe,
    AlfombrasComponent,
    AtrapamugreComponent,
    ProductDetailComponent,
    ModalUploadComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderAdminComponent,
    SidebarAdminComponent,
    BreadcrumbAdminComponent,
    DashboardComponent
  ]
})
export class SharedAdminModule {}
