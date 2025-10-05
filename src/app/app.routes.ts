import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'confirmacion',
    loadComponent: () => import('./features/venta/confirmacion/confirmacion-component')
      .then(m => m.ConfirmacionComponent)
  },
  {
    path: 'carrito',
    loadComponent: () => import('./features/venta/carrito/carrito-component')
      .then(m => m.CarritoComponent)
  },
  {
    path: 'catalogo',
    loadComponent: () => import('./features/venta/catalogo/catalogo-component')
      .then(m => m.CatalogoComponent)
  },
  { path: '', redirectTo: '/confirmacion', pathMatch: 'full' },
  { path: '**', redirectTo: '/confirmacion' }
];
