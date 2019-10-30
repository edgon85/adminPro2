import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoModel } from '../../../../models/producto.model';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { UploadModalService } from '../../../../services/modal/upload-modal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: []
})
export class ProductDetailComponent implements OnInit {
  urlParam: string;
  categories = [
    { id: 'alfombras', name: 'alfombras' },
    { id: 'piso laminado', name: 'piso laminado' },
    { id: 'grama sintetica', name: 'grama sintetica' },
    // { id: 'caucho granulado', name: 'caucho granulado' },
    { id: 'cortinas', name: 'cortinas' },
    { id: 'vinilos', name: 'vinilos' },
    { id: 'atrapamugre', name: 'atrapamugre' }
  ];

  producto = new ProductoModel('', '', '', '', '');

  selectedCategory = '';
  selectedSubCategory = '';
  subCategory: any[] = [];

  tituloPag: string = '';

  constructor(
    private route: ActivatedRoute,
    private _productService: ProductService,
    private _modalUploadService: UploadModalService,
    private router: Router
  ) {
    this._modalUploadService.notificacion.subscribe((resp: any) => {
      if (resp.portada) {
        this.producto.image.portada = resp.portada;
      } else if (resp.img1) {
        this.producto.image.img1 = resp.img1;
      } else if (resp.img2) {
        this.producto.image.img2 = resp.img2;
      } else if (resp.img3) {
        this.producto.image.img3 = resp.img3;
      } else if (resp.img4) {
        this.producto.image.img4 = resp.img4;
      } else if (resp.img5) {
        this.producto.image.img5 = resp.img5;
      }
    });
  }

  ngOnInit() {
    this.urlParam = this.route.snapshot.paramMap.get('id');

    this.tituloPag = 'Crear ' + this.urlParam;

    if (this.urlParam !== 'alfombra') {
      this.tituloPag = 'Actualizar ' + this.urlParam;
      this.cargarProducto(this.urlParam);
    }
  }

  // ===================================================================
  // Crear o actualizar un producto, depende de su slug
  // ===================================================================
  crearActualizarProducto(form: NgForm) {
    this.producto = form.value;

    if (form.invalid) {
      return;
    }

    switch (this.urlParam) {
      case 'alfombra':
        this.crearProdcuto(form.value.title, this.producto);
        break;
      case 'alfombra-atrapamugre':
        console.log('crear atrapa mugre');
        break;
      default:
        this.actualizarProducto(this.urlParam, this.producto);
        break;
    }
  }
  // ===================================================================

  // ===================================================================
  // Crear un nuevo producto
  // ===================================================================
  crearProdcuto(nombre: string, producto: ProductoModel) {
    this.producto.image = {
      portada: '',
      img1: '',
      img2: '',
      img3: '',
      img4: '',
      img5: ''
    };
    this.producto.id = '' + Date.now();
    this.producto.slug = this.crearSlug(nombre) + this.producto.id;

    // console.log(producto);
    this._productService
      .createProduct(producto, this.producto.slug)
      .then(resp => {
        this.urlParam = this.producto.slug;
        this.router.navigate(['/admin/productos/prod', this.producto.slug]);
      });
  }
  // ===================================================================

  // ===================================================================
  // Actualizar un producto por su id o slug
  // ===================================================================
  actualizarProducto(id: string, producto: ProductoModel) {
    this._productService.updateProduct(id, producto).subscribe(() => {
      Swal.fire({
        type: 'success',
        title: 'Actualizado!!!'
      });
      this.cargarProducto(id);
    });
  }
  // ====================================================================

  // ========================================================================
  // Cargar un producto por su id o slug
  // ========================================================================
  cargarProducto(id: string) {
    this._productService.getProduct(id).subscribe((resp: ProductoModel) => {
      // this.urlParam = resp.category;
      this.producto = resp;
      this.subCategory = [{ name: resp.sub_category }];
    });
  }
  // ========================================================================


  // =================================================
  // Cambiar portada o cualquier imagen
  // =================================================
  cambiarPortada(imgData: string, oldUrl: string) {
    this._modalUploadService.mostrarModal(
      this.producto.category,
      this.producto.slug,
      imgData,
      oldUrl
    );
  }
  // =================================================
  // =================================================

  // --------------- Codigo para la categoria y sub categoria -----------
  onSelectCategory(category_id: string) {
    this.selectedSubCategory = category_id;
    this.selectedCategory = '';
    this.subCategory = this.getSubCategory().filter(item => {
      return item.sub_category_id === category_id;
    });
  }

  onSelectSubCategory(subcategory_id: string) {
    this.selectedCategory = subcategory_id;
    // this.cities = this.getCity().filter((item) => {
    //   return item.state_id === Number(state_id);
    // });
  }

  getSubCategory() {
    return [
      { id: 1, sub_category_id: 'alfombras', name: 'alto trafico' },
      { id: 1, sub_category_id: 'alfombras', name: 'solo' },
      { id: 1, sub_category_id: 'alfombras', name: 'salsa' },
      { id: 1, sub_category_id: 'alfombras', name: 'hotelera' },
      { id: 1, sub_category_id: 'alfombras', name: 'pelo alto' },
      { id: 1, sub_category_id: 'alfombras', name: 'de diseño' },
      { id: 1, sub_category_id: 'alfombras', name: 'african queen' },
      { id: 2, sub_category_id: 'piso laminado', name: 'ac3 7mm' },
      { id: 2, sub_category_id: 'piso laminado', name: 'ac4 83mm' },
      { id: 2, sub_category_id: 'piso laminado', name: 'ac5 12mm' },
      { id: 3, sub_category_id: 'grama sintetica', name: 'bolas decorativas' },
      { id: 3, sub_category_id: 'grama sintetica', name: 'follage' },
      { id: 3, sub_category_id: 'grama sintetica', name: 'jardineras' },
      // { id: 4, country_id: 'caucho granulado', name: 'caucho granulado' },
      { id: 5, sub_category_id: 'cortinas', name: 'iglesias' },
      { id: 5, sub_category_id: 'cortinas', name: 'residenciales' },
      { id: 5, sub_category_id: 'cortinas', name: 'infantiles' },
      { id: 6, sub_category_id: 'vinilos', name: 'vinilos' },
      { id: 7, sub_category_id: 'atrapamugre', name: 'atrapamugre' }
    ];
  }

  //   // --------------- Fin categoria y sub categoria -----------

  crearSlug(slug: string): string {
    return (
      slug
        .toLowerCase()
        .split(' ')
        .join('-') + '-'
    );
  }
}
