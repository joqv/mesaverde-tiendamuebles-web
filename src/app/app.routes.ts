import { Routes } from '@angular/router';
import { authGuard } from '../app/services/auth.service-guards';

export const routes: Routes = [
  {
    path: 'confirmacion',
    loadComponent: () => import('./features/venta/confirmacion/confirmacion-component')
      .then(m => m.ConfirmacionComponent),
      canActivate: [authGuard] 
  },
  {
    path: 'carrito',
    loadComponent: () => import('./features/venta/carrito/carrito-component')
      .then(m => m.CarritoComponent),
      canActivate: [authGuard] 
  },
  {
    path: 'catalogo',
    loadComponent: () => import('./features/venta/catalogo/catalogo-component')
      .then(m => m.CatalogoComponent)
  },
  {
    path: 'bvcatalogo',
    loadComponent: () => import('./features/venta/bvcatalogo/bvcatalogo-component')
      .then(m => m.BvcatalogoComponent),
     
  },

  { path: '', redirectTo: '/bvcatalogo', pathMatch: 'full' },
 // { path: '**', redirectTo: '/bvcatalogo' }
];
