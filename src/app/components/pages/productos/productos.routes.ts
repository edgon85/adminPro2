import { Routes } from '@angular/router';
import { ProductoContentComponent } from './producto-content/producto-content.component';
import { GaleriaComponent } from './galeria/galeria.component';

export const PRODUCTOS_ROUTES: Routes = [
    { path: 'alto-trafico', component: ProductoContentComponent, data: {'title': 'Alto trafico'} },
    { path: 'african-queen', component: ProductoContentComponent, data: {'title': 'African queen'} },
    { path: 'de-diseño', component: ProductoContentComponent, data: {'title': 'Diseño'} },
    { path: 'hotelera', component: ProductoContentComponent, data: {'title': 'Hotelera'} },
    { path: 'pelo-alto', component: ProductoContentComponent, data: {'title': 'Pelo alto'} },
    { path: 'salsa', component: ProductoContentComponent, data: {'title': 'Salsa'} },
    { path: 'solo', component: ProductoContentComponent, data: {'title': 'Solo'} },
    // grama sintetica
    { path: 'galeria-grama-sintetica', component: GaleriaComponent, data: {'title': 'Grama sintética'} },
    { path: 'follaje', component: ProductoContentComponent, data: {'title': 'follaje'} },
    { path: 'bolas-decorativas', component: ProductoContentComponent, data: {'title': 'Bolas decorativas'} },
    { path: 'jardineras', component: ProductoContentComponent, data: {'title': 'Jardineras'} },
    // grama piso laminado
    { path: 'galeria-piso-laminado', component: GaleriaComponent, data: {'title': 'Piso laminado'} },
    { path: 'ac3-7mm', component: ProductoContentComponent, data: {'title': 'AC3 7mm'} },
    { path: 'ac4-83mm', component: ProductoContentComponent, data: {'title': 'AC4 8.3mm'} },
    { path: 'ac5-12mm', component: ProductoContentComponent, data: {'title': 'AC5 12mm'} },
    // grama piso linoleo
    { path: 'linoleo', component: ProductoContentComponent, data: {'title': 'Linóleo'} },
    // Cortinas
    { path: 'galeria-cortinas', component: GaleriaComponent, data: {'title': 'Cortinas'} },
    { path: 'iglesias', component: ProductoContentComponent, data: {'title': 'Iglesias'} },
    { path: 'residenciales', component: ProductoContentComponent, data: {'title': 'Residenciales'} },
    // Atrapamugre
    { path: 'atrapamugre', component: ProductoContentComponent, data: {'title': 'Alfombras atrapamugre'} },
    { path: '**', pathMatch: 'full', redirectTo: 'galerilla' },
];
