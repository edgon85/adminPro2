import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlfombrasRoutingModule } from './alfombras-routing.module';
import { AlfombrasPagesComponent } from './alfombras-pages.component';
import { SharedModule } from '../../../shared/shared.module';
import { ReutilizablesModule } from '../../reutilizables/reutilizables.module';
import { SharedAdminModule } from 'src/app/components/admin/admin.module';

@NgModule({
  declarations: [AlfombrasPagesComponent],
  imports: [
    CommonModule,
    AlfombrasRoutingModule,
    SharedModule,
    ReutilizablesModule,
    SharedAdminModule
  ]
})
export class AlfombrasModule {}
