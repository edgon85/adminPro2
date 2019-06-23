import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from '../admin/admin/admin.component';



const pagesRoutes: Routes = [

    {
        path: '', component: PagesComponent,
        children: [
            { path: 'inicio', component: HomeComponent },
           // { path: 'tablas', component: TablasComponent },
            { path: '', redirectTo: 'inicio', pathMatch: 'full' },
        ]
    },
    {
        path: 'admin', component: AdminComponent,
    //     canActivate: [LoginGardGuard],
    //     children : [
    //         { path: 'create', component: CreateComponent},
    //         { path: 'producto/:categoria', component: ProductComponent},
    //         { path: '', redirectTo: 'admin', pathMatch: 'full'}
    //     ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
