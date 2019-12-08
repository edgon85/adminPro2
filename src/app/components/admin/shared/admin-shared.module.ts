import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbAdminComponent } from './breadcrumb-admin/breadcrumb-admin.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { PipesModule } from '../../../pipes/pipes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BreadcrumbAdminComponent,
    HeaderAdminComponent,
    SidebarAdminComponent
  ],
  imports: [CommonModule, RouterModule, PipesModule],
  exports: [
    BreadcrumbAdminComponent,
    HeaderAdminComponent,
    SidebarAdminComponent
  ]
})
export class AdminSharedModule {}
