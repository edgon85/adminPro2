import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './contacto.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactoComponent],
  imports: [CommonModule, ContactoRoutingModule, SharedModule, FormsModule]
})
export class ContactoModule {}
