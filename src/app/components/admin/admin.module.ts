import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderAdminComponent } from './shared/header-admin/header-admin.component';
import { SidebarAdminComponent } from './shared/sidebar-admin/sidebar-admin.component';
import { BreadcrumbAdminComponent } from './shared/breadcrumb-admin/breadcrumb-admin.component';

@NgModule({
  declarations: [
    HeaderAdminComponent,
    SidebarAdminComponent,
    BreadcrumbAdminComponent
  ],
  imports: [
    // CommonModule
    RouterModule
  ],
  exports: [
    HeaderAdminComponent,
    SidebarAdminComponent,
    BreadcrumbAdminComponent
  ]
})
export class SharedAdminModule {}
