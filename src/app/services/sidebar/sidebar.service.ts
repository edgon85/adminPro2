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
        { titulo: 'Galería de alfombras', url: '/alfombras' },
        { titulo: 'Alto trafico', url: '/producto/alfombras/alto-trafico' },
        { titulo: 'African queen', url: '/producto/alfombras/african-queen' },
        { titulo: 'De diseño', url: '/producto/alfombras/de-diseño' },
        { titulo: 'Hotelera', url: '/producto/alfombras/hotelera' },
        { titulo: 'Pelo alto', url: '/producto/alfombras/pelo-alto' },
        { titulo: 'Salsa', url: '/producto/alfombras/salsa' },
        { titulo: 'Solo', url: '/producto/alfombras/solo' },
      ]
    },
    {
      titulo: 'Grama Sintética',
      icono: 'fa fa-caret-right',
      id: 'gramasintetica',
      submenu: [
        // { titulo: 'Alfombras', url: './productos/alfombras' },
        { titulo: 'Galería de grama sintética', url: '/producto/grama-sintetica/galeria-grama-sintetica' },
        { titulo: 'Follaje', url: '/producto/grama-sintetica/follaje' },
        { titulo: 'Bolas decorativas', url: '/producto/grama-sintetica/bolas-decorativas' },
        { titulo: 'Jardineras', url: '/producto/grama-sintetica/jardineras' }
      ]
    },
    {
      titulo: 'Piso laminado',
      icono: 'fa fa-caret-right',
      id: 'pisolaminado',
      submenu: [
        // { titulo: 'Alfombras', url: './productos/alfombras' },
        { titulo: 'Galería de piso laminado', url: '/producto/piso-laminado/galeria-piso-laminado' },
        { titulo: 'AC3 7mm', url: '/producto/piso-laminado/ac3-7mm' },
        { titulo: 'AC4 8.3mm', url: '/producto/piso-laminado/ac4-83mm' },
        { titulo: 'AC5 12mm', url: '/producto/piso-laminado/ac5-12mm' },
      ]
    },
  ];
}
