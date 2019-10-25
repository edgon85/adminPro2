import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ProductoModel } from '../../../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // urlProducts = 'https://alfombras-de-occidente.firebaseio.com/product.json';
  // urlProduct  = 'https://alfombras-de-occidente.firebaseio.com/productos/';
  // urlProduct  = 'https://alfombras-de-occidente.firebaseio.com/product/';

  urlProduct = 'https://casa-e-imagen.firebaseio.com/productos.json';
  // https://casa-e-imagen.firebaseio.com/productos.json?orderBy=%22category%22&equalTo=%22alfombras%22

  constructor(private http: HttpClient) {}

  public getAllProducts(categoria: string) {
    let url = this.urlProduct + `?orderBy="category"&equalTo="${categoria}"`;

    return this.http.get(url).pipe(
      map(this.crearArreglo)
    );
  }

  private crearArreglo( productosObj: object ) {
    const productos: ProductoModel[] = [];
    Object.keys( productosObj ).forEach( key => {
      const producto: ProductoModel = productosObj[key];
      producto.id = key;
     // console.log( producto);
      productos.push( producto );
    });

    // if ( productosObj === null ) { return []; }
    return productos;
  }
}

// public getProductsAdmin() {
//   return this.afDB.list('/productos');
// }

// public getProductAdmin( slug: string ) {
//   return this.afDB.object('/productos/' + slug);
// }

// public createProduct( product: Product, key: string) {
//   // return this.afDB.database.ref('product/' + key).set( product );
//   return this.afDB.object('/productos/' + key).set(product);
// }

// public updateProduct( product: Product, key: string ) {
//   return this.afDB.object('/productos/' + key).update( product);
// }

// public deleteProduct( keyId: string) {
//   return this.afDB.object('/productos/' + keyId).remove();
// }

// public getProduct( slug ) {
//   let url = `${this.urlProduct}/${ slug }.json`;
//   return this.http.get( url ).pipe(
//     map( (resp) => {
//       // console.log('url: ', url);
//       // console.log( resp );
//       return resp;
//     })
//   );
// }
