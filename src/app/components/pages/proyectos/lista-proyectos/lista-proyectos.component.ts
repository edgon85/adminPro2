import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../../../services/proyectos/proyecto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-proyectos',
  templateUrl: './lista-proyectos.component.html',
  styleUrls: ['./lista-proyectos.component.css']
})
export class ListaProyectosComponent implements OnInit {
  proyectos: any[] = [];

  constructor(
    private _proyectService: ProyectoService,
    private route: Router
  ) {}

  ngOnInit() {
    this.obtenerProyectos();
  }

  obtenerProyectos() {
    this._proyectService.getAllProjects().subscribe(resp => {
      this.proyectos = resp;
    });
  }

  getProyecto(slug: string) {
    this.route.navigate(['/proyectos', slug]);
  }
}
