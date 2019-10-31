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
        { titulo: 'Alfombras', url: './productos/alfombras' },
        {
          titulo: 'Alfombras atrapa mugre',
          url: './productos/atrapamugre'
        },
        { titulo: 'Cortinas', url: './productos/cortinas' },
        { titulo: 'Grama sintetica', url: './productos/grama-sintetica' },
        { titulo: 'Linóleo', url: './productos/linoleo' },
        { titulo: 'Papel tapiz', url: './productos/papel-tapiz' },
        { titulo: 'Piso laminado', url: './productos/piso-laminado' }
      ]
    }
  ];
}
