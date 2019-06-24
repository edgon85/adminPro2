import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { PagesComponent } from './pages.component';
import { AdminComponent } from '../admin/admin/admin.component';
import { SharedAdminModule } from '../admin/admin.module';

@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    AdminComponent
  ],
  imports: [
    SharedModule,
    SharedAdminModule,
    PAGES_ROUTES
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
