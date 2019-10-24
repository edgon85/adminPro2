import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/interfaces/product';
import { AngularFireStorage } from '@angular/fire/storage';
import { NgForm } from '@angular/forms';
import { finalize } from 'rxjs/operators';
// import swal from 'sweetalert';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
//   categoria = '';
//   productos: string[] = [];
//   producto: Product = {
//     title: '',
//     slug: '',
//     category: '',
//     sub_category: '',
//     description: '',
//     timestamp: '',
//     image: {
//       img1: ''
//     }
//   };

//   selectedCountry = '';
//   selectedState = '';
//   states = [];
//   cities = [];

//   imagenSubir: File;
//   imagenTemp: string;

//   slug: string;
//   timestamp: number;

//   @ViewChild('myInputFile', { static: false }) myInputVariable: any;

//   constructor(
//     private activatedRoute: ActivatedRoute,
//     private _productService: ProductService,
//     private storage: AngularFireStorage
//   ) {
//     this.activatedRoute.params.subscribe(data => {
//       const temporal = data['categoria'];
//       this.categoria = temporal.split('-').join(' ');
//       console.log(temporal);
//     });

//     this.getProducts();
//   }

//   ngOnInit() {}

//   // ----- obtener todos los roductos -----
//   getProducts() {
//     // this._productService.getProducts().subscribe();
//     this._productService
//       .getProductsAdmin()
//       .valueChanges()
//       .subscribe((data: string[]) => {
//         console.log(data);
//         this.productos = data;
//       });
//   }

//   // ----- guardar un producto con su imagen -----
//   guardarProducto(forma) {
//     this.timestamp = Date.now();
//     this.slug =
//       this.producto.title
//         .toLowerCase()
//         .split(' ')
//         .join('-') +
//       '-' +
//       this.timestamp.toString();
//     this.producto.slug = this.slug;
//     this.producto.timestamp = this.timestamp.toString();

//     const file = this.imagenSubir;
//     const filePath = 'images/productos/' + this.slug;
//     const fileRef = this.storage.ref(filePath);
//     const task = this.storage.upload(filePath, file);

//     // this.limpiarForma( forma );
//     this.limpiarInput();
//     task
//       .snapshotChanges()
//       .pipe(
//         finalize(() => {
//           fileRef.getDownloadURL().subscribe(data => {
//             this.producto.image.img1 = data;
//             this._productService.createProduct(this.producto, this.slug);
//           //  swal(this.producto.title, 'Creado satisfactoriamente', 'success');
//             this.limpiarForma(forma);
//           });
//         })
//       )
//       .subscribe();
//   }

//   // ----- obtiene un producto -----
//   obtenerProducto(slug: string) {
//     this._productService
//       .getProductAdmin(slug)
//       .valueChanges()
//       .subscribe((data: Product) => {
//         this.producto = data;
//       });
//   }

//   // ----- actualiza un producto -----
//   actualizar(forma: any) {
//     this._productService
//       .updateProduct(this.producto, this.producto.slug)
//       .then(() => {
//        // swal(this.producto.title, 'Actualizado', 'success');
//       })
//       .catch(error => {
//         console.log('Ocurrio un error', error);
//       });
//   }

//   // ----- Eliminar un producto -----
//   eliminarProducto(slug: string) {
//     this._productService.getProduct(slug).subscribe((data: Product) => {
//       this.producto = data;

//       // swal({
//       //   title: 'Esta seguro?',
//       //   text: 'Una vez eliminado, no podrá recuperar este archivo!',
//       //   icon: 'warning',
//       //   dangerMode: true,
//       //   // buttons: true,
//       //   buttons: ['Cancelar', 'Si']
//       // }).then(willDelete => {
//       //   if (willDelete) {
//       //     this.storage.storage.refFromURL(this.producto.image.img1).delete();
//       //     this._productService
//       //       .deleteProduct(slug)
//       //       .then(resp => {})
//       //       .catch();
//       //     swal('Producto a sido eliminado!', {
//       //       icon: 'success'
//       //     });
//       //   } else {
//       //     // swal('El producto !');
//       //   }
//       // });
//     });
//   }

//   // ----- para actualizar la imagen -----
//   onFileUpdate(archivo: File) {
//     if (!archivo) {
//       this.imagenSubir = null;
//       return;
//     }

//     if (archivo.type.indexOf('image') < 0) {
//       // swal(
//       //   'Sólo imágenes',
//       //   'El archivo seleccionando no es una imagen',
//       //   'error'
//       // );
//       this.imagenSubir = null;
//       return;
//     }

//     this.storage.storage.refFromURL(this.producto.image.img1).delete();

//     const file = archivo;
//     const keyName =
//       this.producto.title
//         .toLowerCase()
//         .split(' ')
//         .join('-') +
//       '-' +
//       Date.now();
//     const filePath = 'images/productos/' + keyName;
//     const fileRef = this.storage.ref(filePath);
//     const task = this.storage.upload(filePath, file);

//     task
//       .snapshotChanges()
//       .pipe(
//         finalize(() => {
//           fileRef.getDownloadURL().subscribe(data => {
//             this.producto.image.img1 = data;
//           });
//         })
//       )
//       .subscribe();
//   }

//   // --------------- Codigo para la categoria y sub categoria -----------
//   onSelectCategory(country_id: string) {
//     this.selectedCountry = country_id;
//     this.selectedState = '';
//     this.cities = [];
//     this.states = this.getSubCategory().filter(item => {
//       return item.country_id === country_id;
//     });
//   }

//   onSelectSubCategory(state_id: string) {
//     this.selectedState = state_id;
//     // this.cities = this.getCity().filter((item) => {
//     //   return item.state_id === Number(state_id);
//     // });
//   }

//   getCategory() {
//     return [
//       { id: 'alfombras', name: 'alfombras' },
//       { id: 'piso laminado', name: 'piso laminado' },
//       { id: 'grama sintetica', name: 'grama sintetica' },
//       // { id: 'caucho granulado', name: 'caucho granulado' },
//       { id: 'cortinas', name: 'cortinas' },
//       { id: 'vinilos', name: 'vinilos' },
//       { id: 'atrapamugre', name: 'atrapamugre' }
//     ];
//   }

//   getSubCategory() {
//     return [
//       { id: 1, country_id: 'alfombras', name: 'alto trafico' },
//       { id: 1, country_id: 'alfombras', name: 'solo' },
//       { id: 1, country_id: 'alfombras', name: 'salsa' },
//       { id: 1, country_id: 'alfombras', name: 'hotelera' },
//       { id: 1, country_id: 'alfombras', name: 'pelo alto' },
//       { id: 1, country_id: 'alfombras', name: 'de diseño' },
//       { id: 1, country_id: 'alfombras', name: 'african queen' },
//       { id: 2, country_id: 'piso laminado', name: 'ac3 7mm' },
//       { id: 2, country_id: 'piso laminado', name: 'ac4 83mm' },
//       { id: 2, country_id: 'piso laminado', name: 'ac5 12mm' },
//       { id: 3, country_id: 'grama sintetica', name: 'bolas decorativas' },
//       { id: 3, country_id: 'grama sintetica', name: 'follage' },
//       { id: 3, country_id: 'grama sintetica', name: 'jardineras' },
//       // { id: 4, country_id: 'caucho granulado', name: 'caucho granulado' },
//       { id: 5, country_id: 'cortinas', name: 'iglesias' },
//       { id: 5, country_id: 'cortinas', name: 'residenciales' },
//       { id: 5, country_id: 'cortinas', name: 'infantiles' },
//       { id: 6, country_id: 'vinilos', name: 'vinilos' },
//       { id: 7, country_id: 'atrapamugre', name: 'atrapamugre' }
//     ];
//   }

//   // --------------- Fin categoria y sub categoria -----------

//   // ----- seleccionar una imagen -----
//   onFileSelected(archivo: File) {
//     if (!archivo) {
//       this.imagenSubir = null;
//       return;
//     }

//     // console.log( archivo);
//     if (archivo.type.indexOf('image') < 0) {
//       // swal(
//       //   'Sólo imágenes',
//       //   'El archivo seleccionando no es una imagen',
//       //   'error'
//       // );
//       this.imagenSubir = null;
//       return;
//     }

//     this.imagenSubir = archivo;

//     const reader = new FileReader();
//     const urlImageTemp = reader.readAsDataURL(archivo);
//     reader.onloadend = () => (this.imagenTemp = reader.result.toString());
//   }

//   limpiarForma(forma: NgForm) {
//     forma.reset();
//     this.myInputVariable.nativeElement.value = null;
//     this.imagenTemp = null;
//     this.imagenSubir = null;
//   }

//   limpiarInput() {
//     // console.log(this.myInputVariable.nativeElement.files[0]);
//     this.myInputVariable.nativeElement.value = null;
//     // console.log(this.myInputVariable.nativeElement.files[0]);
//     this.imagenTemp = null;
//     // this.imagenSubir = null;
//   }
// }
