import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoModel } from '../../../../../models/producto.model';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { UploadModalService } from '../../../../../services/modal/upload-modal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: []
})
export class ProductDetailComponent implements OnInit {
  urlParam: string;
  categories = [
    { id: 'alfombras', name: 'Alfombras' },
    { id: 'atrapamugre', name: 'Atrapamugre' },
    { id: 'cortinas', name: 'Cortinas' },
    { id: 'grama sintetica', name: 'Grama sintetica' },
    { id: 'linoleo', name: 'Linóleo' },
    { id: 'piso laminado', name: 'Piso laminado' }
    // { id: 'caucho granulado', name: 'caucho granulado' },
  ];

  producto = new ProductoModel('', '', '', '', '');

  selectedCategory = '';
  selectedSubCategory = '';
  subCategory: any[] = [];

  tituloPag: string = '';

  pathBack: string = '';

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

    this.tituloPag = 'Crear producto nuevo';

    if (this.urlParam !== 'nuevo') {
      this.cargarProducto(this.urlParam);
      // this.tituloPag = 'Actualizar ' + this.producto.title;
    }
    // if (this.urlParam !== 'atrapamugre') {
    //   this.tituloPag = 'Actualizar ' + this.urlParam;
    //   this.cargarProducto(this.urlParam);
    // }
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
      case 'nuevo':
        this.crearProdcuto(form.value.title, this.producto);
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
        // this.urlParam = this.producto.slug;
        this.pathBack = this.producto.category.split(' ').join('-');
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
      this.tituloPag = 'Actualizar ' + this.producto.title;

      this.pathBack = this.producto.category.split(' ').join('-');
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
      {
        id: 1,
        sub_category_id: 'alfombras',
        name: 'Alto trafico',
        value: 'alto trafico'
      },
      {
        id: 1,
        sub_category_id: 'alfombras',
        name: 'African queen',
        value: 'african queen'
      },
      {
        id: 1,
        sub_category_id: 'alfombras',
        name: 'De diseño',
        value: 'de diseño'
      },
      {
        id: 1,
        sub_category_id: 'alfombras',
        name: 'Hotelera',
        value: 'hotelera'
      },
      {
        id: 1,
        sub_category_id: 'alfombras',
        name: 'Pelo alto',
        value: 'pelo alto'
      },
      { id: 1, sub_category_id: 'alfombras', name: 'Salsa', value: 'salsa' },
      { id: 1, sub_category_id: 'alfombras', name: 'Solo', value: 'solo' },
      {
        id: 2,
        sub_category_id: 'piso laminado',
        name: 'Ac3 7mm',
        value: 'ac3 7mm'
      },
      {
        id: 2,
        sub_category_id: 'piso laminado',
        name: 'Ac4 83mm',
        value: 'ac4 83mm'
      },
      {
        id: 2,
        sub_category_id: 'piso laminado',
        name: 'Ac5 12mm',
        value: 'ac5 12mm'
      },
      {
        id: 3,
        sub_category_id: 'grama sintetica',
        name: 'Bolas decorativas',
        value: 'bolas decorativas'
      },
      {
        id: 3,
        sub_category_id: 'grama sintetica',
        name: 'Follaje',
        value: 'follaje'
      },
      {
        id: 3,
        sub_category_id: 'grama sintetica',
        name: 'Jardineras',
        value: 'jardineras'
      },
      // { id: 4, country_id: 'caucho granulado', name: 'caucho granulado' },
      {
        id: 5,
        sub_category_id: 'cortinas',
        name: 'Iglesias',
        value: 'iglesias'
      },
      {
        id: 5,
        sub_category_id: 'cortinas',
        name: 'Infantiles',
        value: 'infantiles'
      },
      {
        id: 5,
        sub_category_id: 'cortinas',
        name: 'Residenciales',
        value: 'residenciales'
      },
      { id: 6, sub_category_id: 'linoleo', name: 'Linóleo', value: 'linoleo' },
      {
        id: 7,
        sub_category_id: 'atrapamugre',
        name: 'Atrapamugre',
        value: 'atrapamugre'
      },
      {
        id: 8,
        sub_category_id: 'papel tapiz',
        name: 'Factory 2014',
        value: 'factory 2014'
      },
      {
        id: 8,
        sub_category_id: 'papel tapiz',
        name: 'Kids club',
        value: 'kids club'
      },
      {
        id: 8,
        sub_category_id: 'papel tapiz',
        name: 'Walton 2014',
        value: 'walton 2014'
      },
      {
        id: 8,
        sub_category_id: 'papel tapiz',
        name: 'Wallton dimension 3d',
        value: 'wallton dimension 3d'
      }
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
