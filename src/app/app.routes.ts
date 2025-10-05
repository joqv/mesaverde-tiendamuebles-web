import { Routes } from '@angular/router';



export const routes: Routes = [
  {
    path: 'confirmacion',
    loadComponent: () => import('./features/venta/confirmacion/confirmacion-component')
      .then(m => m.ConfirmacionComponent)
  },
  { path: '', redirectTo: '/confirmacion', pathMatch: 'full' },
  { path: '**', redirectTo: '/confirmacion' }
];
