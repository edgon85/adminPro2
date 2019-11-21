import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  urlProduct = 'https://casa-e-imagen.firebaseio.com';

  constructor(
    private http: HttpClient) { }


  // ====================================================
  // Obtiene todos los proyectos
  // ====================================================
  public getAllProjects() {
    let url = this.urlProduct + '/proyectos.json';

    return this.http.get(url).pipe(
      map(this.crearArreglo)
    );
  }


  public getProject(slug: string) {
    let url = this.urlProduct + `/proyectos/${slug}.json`;

    return this.http.get(url);
  }


   // ====================================================
  // Conviert los datos d firebase a un arreglo para que
  // pueda recorerlos en el template
  // ====================================================
  private crearArreglo(proyectosObj: object) {
    const proyectos: any[] = [];
    Object.keys(proyectosObj).forEach(key => {
      const producto = proyectosObj[key];
      producto.id = key;
      // console.log( producto);
      proyectos.push(producto);
    });

    if ( proyectosObj === null ) { return []; }
    return proyectos;
  }
}
