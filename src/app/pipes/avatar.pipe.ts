import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatar'
})
export class AvatarPipe implements PipeTransform {

  transform(img: string): any {

    if ( img === '' ) {
      img = 'assets/img/products/no-img.jpg';
      return img;
    } else {
      return img;
    }
  }

}
