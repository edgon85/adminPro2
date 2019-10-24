import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  // menu: any[] = [];

  constructor() {}

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: './dashboard' },
        { titulo: 'Usuarios', url: './usuarios' }
      ]
    },
    {
      titulo: 'Productos',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        { titulo: 'Alfombras', url: './producto/alfombras' },
        {
          titulo: 'Alfombras atrapa mugre',
          url: './producto/alfombra-atrapa-mugre'
        },
        { titulo: 'Cortinas', url: './producto/cortinas' },
        { titulo: 'Grama sintetica', url: './producto/grama-sintetica' },
        { titulo: 'Linóleo', url: './producto/grama-sintetica' },
        { titulo: 'Papel tapiz', url: './producto/papel-tapiz' },
        { titulo: 'Piso laminado', url: './producto/piso-laminado' }
      ]
    }
  ];
}
