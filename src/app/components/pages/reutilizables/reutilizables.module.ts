import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { FilterProductPipe } from '../../../pipes/filter-product.pipe';
import { DomseguroPipe } from '../../../pipes/domseguro.pipe';

@NgModule({
  declarations: [LoadingComponent, FilterProductPipe, DomseguroPipe],
  imports: [CommonModule],
  exports: [LoadingComponent, FilterProductPipe, DomseguroPipe]
})
export class ReutilizablesModule {}
