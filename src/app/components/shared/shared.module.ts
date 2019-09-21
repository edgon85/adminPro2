import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    NavbarComponent
  ],
  imports: [
   // CommonModule
   RouterModule
  ]
  , exports: [
    PageNotFoundComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
