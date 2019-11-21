import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectoService } from '../../../../services/proyectos/proyecto.service';

declare function init_lightbox(): any;

@Component({
  selector: 'app-proyecto-detalle',
  templateUrl: './proyecto-detalle.component.html',
  styleUrls: ['../lista-proyectos/lista-proyectos.component.css']
})
export class ProyectoDetalleComponent implements OnInit {

  urlFondo: string = 'assets/page/img/products/page-header-image2.jpg';

  proyecto: any = {};

  constructor(
    private router: ActivatedRoute,
    private _proyectoService: ProyectoService) {
    this.router.params.subscribe(
      (param) => {
        this.obtenerProyecto(param['id']);
        // console.log(this.proyecto);
      }
    );
  }

  ngOnInit() {
    // init_lightbox();
  }


  obtenerProyecto( slug: string ) {
    this._proyectoService.getProject(slug)
    .subscribe(
      (resp: any) => {
        // console.log(resp.images);
        this.proyecto = resp;
        // tslint:disable-next-line:forin
        // for (let i in this.proyecto.images) {
        //   console.log(resp.images[i]);
        // }
      }
    );
  }
}
