import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent,
    BreadcrumbComponent,
    SidebarComponent
  ],
  imports: [
   CommonModule,
   RouterModule
  ]
  , exports: [
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent,
    BreadcrumbComponent,
    SidebarComponent

  ]
})
export class SharedModule { }
