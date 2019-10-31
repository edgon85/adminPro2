import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from '../admin/admin/admin.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { LoginGardGuard } from '../../services/gards/login-gard.guard';
import { ProductComponent } from '../admin/pages/product/product.component';
import { AlfombrasComponent } from '../admin/pages/alfombras/alfombras.component';
import { AtrapamugreComponent } from '../admin/pages/atrapamugre/atrapamugre.component';
import { ProductDetailComponent } from '../admin/pages/product/product-detail.component';
import { CortinasComponent } from '../admin/pages/cortinas/cortinas.component';
import { GramaSinteticaComponent } from '../admin/pages/grama-sintetica/grama-sintetica.component';
import { LinoleoComponent } from '../admin/pages/linoleo/linoleo.component';
import { PapelTapizComponent } from '../admin/pages/papel-tapiz/papel-tapiz.component';
import { PisoLaminadoComponent } from '../admin/pages/piso-laminado/piso-laminado.component';



const pagesRoutes: Routes = [

    {
        path: '', component: PagesComponent,
        children: [
            { path: 'inicio', component: HomeComponent, data: {'title': 'Inicio'} },
           // { path: 'tablas', component: TablasComponent },
            { path: '', redirectTo: 'inicio', pathMatch: 'full' },
        ]
    },
    {
        path: 'admin', component: AdminComponent,
         canActivate: [LoginGardGuard],
         children : [
            { path: 'dashboard', component: DashboardComponent, data: {'title': 'Dashboard'}},
            //  router de productos
            {
                path: 'productos', component: ProductComponent,
                children: [
                    { path: 'prod/:id', component: ProductDetailComponent, data: {'title': 'Producto'}},
                    { path: 'alfombras', component: AlfombrasComponent, data: {'title': 'Alfombras'}},
                    { path: 'atrapamugre', component: AtrapamugreComponent, data: {'title': 'Alfombras atrapamugre'}},
                    { path: 'cortinas', component: CortinasComponent, data: {'title': 'Cortinas'}},
                    { path: 'grama-sintetica', component: GramaSinteticaComponent, data: {'title': 'Grama sintética'}},
                    { path: 'linoleo', component: LinoleoComponent, data: {'title': 'linóleo'}},
                    { path: 'papel-tapiz', component: PapelTapizComponent, data: {'title': 'Papel tapiz'}},
                    { path: 'piso-laminado', component: PisoLaminadoComponent, data: {'title': 'Piso laminado'}},
                ]
            },
            { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full'}
         ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
