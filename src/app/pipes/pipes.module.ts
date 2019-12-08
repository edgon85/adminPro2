import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarPipe } from './avatar.pipe';
import { DomseguroPipe } from './domseguro.pipe';
import { FilterProductPipe } from './filter-product.pipe';
import { KeysPipe } from './keys.pipe';

@NgModule({
  declarations: [AvatarPipe, DomseguroPipe, FilterProductPipe, KeysPipe],
  imports: [],
  exports: [AvatarPipe, DomseguroPipe, FilterProductPipe, KeysPipe]
})
export class PipesModule {}
