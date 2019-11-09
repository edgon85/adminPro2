import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
   // CommonModule
   RouterModule
  ]
  , exports: [
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
