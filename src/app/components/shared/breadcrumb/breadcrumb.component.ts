import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  titulo: string;

  nosotrosContacto: boolean;

  constructor( private router: Router, private title: Title ) {
    this.getDataRoute().subscribe(
      (resp) => {
        this.titulo = resp.title;
        this.title.setTitle('Casa e Imagen | ' + this.titulo);
      }
    );
  }

  ngOnInit() {
    this.quitarProducto();
  }

  // ===== Obtener la informacion del router en especicamente la data la data ===== //
  // ===== version corta ===== //
  getDataRoute() {
    return this.router.events.pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento: ActivationEnd) => evento.snapshot.data)
    );
  }

    // =====================================
  // Quita li del template
  // =====================================
  quitarProducto() {
    switch (this.titulo) {
      case 'Quienes somos':
        this.nosotrosContacto = false;
        break;
      case 'Contáctanos':
        this.nosotrosContacto = false;
        break;
      default:
        this.nosotrosContacto = true;
    }
  }

}
