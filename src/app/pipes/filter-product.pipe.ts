import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  // transform(value: any, ...args: any[]): any {
  transform(value: any, arg: any): any {
    const resultadoProd = [];

    for ( const post of value ) {
      if ( post.sub_category === arg ) {
        resultadoProd.push(post);
      }
    }

    return resultadoProd;
  }

}
