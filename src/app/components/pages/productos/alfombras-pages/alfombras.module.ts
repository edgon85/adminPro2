import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlfombrasRoutingModule } from './alfombras-routing.module';
import { AlfombrasPagesComponent } from './alfombras-pages.component';
import { SharedModule } from '../../../shared/shared.module';
import { ReutilizablesModule } from '../../reutilizables/reutilizables.module';
import { PipesModule } from '../../../../pipes/pipes.module';

@NgModule({
  declarations: [AlfombrasPagesComponent],
  imports: [
    CommonModule,
    AlfombrasRoutingModule,
    SharedModule,
    ReutilizablesModule,
    PipesModule
  ]
})
export class AlfombrasModule {}
