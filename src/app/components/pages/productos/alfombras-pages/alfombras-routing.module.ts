import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlfombrasPagesComponent } from './alfombras-pages.component';

const routes: Routes = [
  { path: '', component: AlfombrasPagesComponent, data: { title: 'Alfombras' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlfombrasRoutingModule {}
