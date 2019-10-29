import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { ProductoModel } from '../../../models/producto.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  urlProduct = 'https://casa-e-imagen.firebaseio.com';
  // https://casa-e-imagen.firebaseio.com/productos.json?orderBy=%22category%22&equalTo=%22alfombras%22

  constructor(
    private http: HttpClient,
    private afDB: AngularFireDatabase,
    private router: Router
    ) {}

  // ====================================================
  // Obtiene todos los productos
  // ====================================================
  public getAllProducts(categoria: string) {
    let url = this.urlProduct + `/productos.json?orderBy="category"&equalTo="${categoria}"`;

    return this.http.get(url).pipe(
      map(this.crearArreglo),
      delay(0)
    );
  }

  // ====================================================
  // Obtiene un producto
  // ====================================================
  public getProduct(id: string) {
    let url = this.urlProduct + `/productos/${id}.json`;

    return this.http.get(url);
  }

  // ====================================================
  // Crea un producto
  // ====================================================
  // public createProduct(product: ProductoModel, slug: string) {
  //   let url = this.urlProduct + `/productos/${slug}.json`;

  //   return this.http.post(url, product);
  // }
  public createProduct( product: ProductoModel, key: string) {
  // return this.afDB.database.ref('product/' + key).set( product );
  return this.afDB.object('/productos/' + key).set(product);
}


  // ====================================================
  // Crea un producto
  // ====================================================
  public updateImage( id: string, imageIdJSON: any, imagePathJson: string ) {

    let imageData: object = {};
    imageData[imageIdJSON] = imagePathJson;

    // let _data = { imageIdJSON: imagePathJson };
    let url = this.urlProduct + `/productos/${id}/image.json`;

    return this.http.patch(url, imageData);
  }




  // ====================================================
  // Conviert los datos d firebase a un arreglo para que
  // pueda recorerlos en el template
  // ====================================================
  private crearArreglo(productosObj: object) {
    const productos: ProductoModel[] = [];
    Object.keys(productosObj).forEach(key => {
      const producto: ProductoModel = productosObj[key];
      producto.id = key;
      // console.log( producto);
      productos.push(producto);
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
