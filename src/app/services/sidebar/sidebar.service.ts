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

  menuPages: any = [
    {
      titulo: 'Alfombras',
      icono: 'fa fa-caret-right',
      id: 'alfombras',
      submenu: [
        { titulo: 'Galeria de alfombras', url: '/alfombras' },
        { titulo: 'Alto trafico', url: '/alto-trafico' },
        { titulo: 'African queen', url: '/african-queen' },
        { titulo: 'Diseño', url: '/disenio' },
        { titulo: 'Hotelera', url: '/hotelera' },
        { titulo: 'Pelo alto', url: '/pelo-alto' },
        { titulo: 'Salsa', url: '/salsa' },
        { titulo: 'Solo', url: '/solo' },
      ]
    },
    {
      titulo: 'Grama Sintética',
      icono: 'fa fa-caret-right',
      id: 'gramasintetica',
      submenu: [
        // { titulo: 'Alfombras', url: './productos/alfombras' },
        { titulo: 'Galería de grama sintética', url: '/grama-sintetica' },
        { titulo: 'Follaje', url: '/grama-sinteticas' },
        { titulo: 'Bolas decorativas', url: '/grama-sinteticas' },
        { titulo: 'Jardineras', url: '/grama-sinteticas' }
      ]
    }
  ];
}
