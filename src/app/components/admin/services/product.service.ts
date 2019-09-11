import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';
import { Product } from 'src/app/interfaces/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // urlProducts = 'https://alfombras-de-occidente.firebaseio.com/product.json';
  // urlProduct  = 'https://alfombras-de-occidente.firebaseio.com/productos/';
  // urlProduct  = 'https://alfombras-de-occidente.firebaseio.com/product/';

  urlProduct = 'https://casa-e-imagen.firebaseio.com/productos/';

  constructor(private http: HttpClient,
    private afDB: AngularFireDatabase,
    ) { }

    public getProductsAdmin() {
      return this.afDB.list('/productos');
    }

    public getProductAdmin( slug: string ) {
      return this.afDB.object('/productos/' + slug);
    }

    public createProduct( product: Product, key: string) {
      // return this.afDB.database.ref('product/' + key).set( product );
      return this.afDB.object('/productos/' + key).set(product);
    }

    public updateProduct( product: Product, key: string ) {
      return this.afDB.object('/productos/' + key).update( product);
    }
    
    public deleteProduct( keyId: string) {
      return this.afDB.object('/productos/' + keyId).remove();
    }


    public getProduct( slug ) {
      let url = `${this.urlProduct}/${ slug }.json`;
      return this.http.get( url ).pipe(
        map( (resp) => {
          // console.log('url: ', url);
          // console.log( resp );
          return resp;
        })
      );
    }
}
