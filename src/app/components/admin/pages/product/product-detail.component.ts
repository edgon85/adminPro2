import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoModel } from '../../../../models/producto.model';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../services/product.service';

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
  // cities: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private _productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.urlParam = this.route.snapshot.paramMap.get('id');

    if ( this.urlParam !== 'alfombra' ) {
      this.cargarProducto(this.urlParam);
    }

  }

  crearProducto(form: NgForm) {
    this.producto = form.value;
    this.producto.image = { portada: '' };
    this.producto.id = '' + Date.now();
    this.producto.slug = this.crearSlug(form.value.title) + this.producto.id;

    if (form.invalid) {
      return;
    }

    // let peticion: Promise<any>;

    this._productService
      .createProduct(this.producto, this.producto.slug)
      .then(resp => {
        this.router.navigate(['/admin/productos/prod', this.producto.slug]);
      });
  }


  cargarProducto(id: string) {
    this._productService.getProduct(id)
    .subscribe(
      (resp: ProductoModel) => {
        this.urlParam = resp.category;
        this.producto = resp;
        this.subCategory = [{'name': resp.sub_category}];
      }
    );
  }












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
