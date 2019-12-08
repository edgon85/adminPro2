import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { NosotrosComponent } from './nosotros.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [NosotrosComponent],
  imports: [NosotrosRoutingModule, SharedModule]
})
export class NosotrosModule {}
