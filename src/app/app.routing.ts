import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AlitourGuard } from './core/guards/alitour.guard';
import { CafeGuard } from './core/guards/cafe.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: './alitour/authentication/login/login.module#LoginModule'
    },
    {
        path: 'cafe',
        canActivate: [AuthGuard, CafeGuard],
        redirectTo: 'auth/login'
    },
    {
        path: 'alitour',
        canActivate: [AuthGuard, AlitourGuard],
        children: [
            {
                path: 'clientes',
                loadChildren: './alitour/clientes/clientes.module#ClientesModule'
            },
            {
                path: 'cotizacion',
                loadChildren: './alitour/cotizacion/cotizacion.module#CotizacionModule'
            },
            {
                path: 'unidades',
                loadChildren: './alitour/unidades/unidades.module#UnidadesModule'
            },
            {
                path: 'articulos',
                loadChildren: './alitour/articulos/articulos.module#ArticulosModule'
            },
        ]
    },
];
