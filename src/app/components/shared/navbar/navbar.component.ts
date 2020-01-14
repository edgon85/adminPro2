import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
declare function init_plugin_navbar();

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('myDiv', null) myDiv: ElementRef;
  @ViewChild('divProd', null) divProd: ElementRef;

  constructor(public route: Router, private router: ActivatedRoute) {}

  ngOnInit() {
    init_plugin_navbar();
    this.addBtnActive();
  }

  ocultar() {
    if (this.myDiv.nativeElement.classList.contains('activo')) {
      this.myDiv.nativeElement.classList.remove('activo');
    }
  }

  // ====================================================
  // Obtener path de la ruta
  // ====================================================
  getRutas() {
    return this.route.events.pipe(
      filter(evento => evento instanceof NavigationEnd),
      map((evento: NavigationEnd) => evento.url)
    );
  }
  // ====================================================

  // ====================================================
  // Agregar activo al boton de productos
  // ====================================================
  addBtnActive() {
    this.getRutas().subscribe(resp => {
      if (
        resp.includes('producto') ||
        resp.includes('product') ||
        resp.includes('alfombras-galeria')
      ) {
        this.divProd.nativeElement.classList.add('btnActive');
      } else {
        this.divProd.nativeElement.classList.remove('btnActive');
      }
    });
  }
  // ====================================================
}
