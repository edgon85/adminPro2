import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectoService } from '../../../../services/proyectos/proyecto.service';
import { Lightbox } from 'ngx-lightbox'; // => https://www.npmjs.com/package/ngx-lightbox

@Component({
  selector: 'app-proyecto-detalle',
  templateUrl: './proyecto-detalle.component.html',
  styleUrls: ['../lista-proyectos/lista-proyectos.component.css']
})
export class ProyectoDetalleComponent implements OnInit {
  urlFondo: string = 'assets/page/img/products/page-header-image2.jpg';

  proyecto: any = {};
  _albums: any[] = [];

  constructor(
    private router: ActivatedRoute,
    private _proyectoService: ProyectoService,
    private _lightbox: Lightbox
  ) {
    this.router.params.subscribe(param => {
      this.obtenerProyecto(param['id']);
    });
  }

  ngOnInit() {}

  obtenerProyecto(slug: string) {
    this._proyectoService.getProject(slug).subscribe((resp: any) => {
      this.proyecto = resp;
      // tslint:disable-next-line:forin
      for (let i in this.proyecto.images) {
        const album = {
          src: this.proyecto.images[i],
          caption: 'Casa e Imagen',
          thumb: this.proyecto.images[i]
        };

        this._albums.push(album);
      }
    });
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
