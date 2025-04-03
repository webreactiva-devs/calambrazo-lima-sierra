import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './core/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shared/ui/layout/layout.component').then((m) => m.default),
    loadChildren: () =>
      import('./products/features/product-shell/product.route').then(
        (m) => m.default
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./shared/ui/layout/layout.component').then((m) => m.default),
    loadChildren: () =>
      import('./about/about.routes').then((m) => m.default),
  },
  {
    canActivateChild: [publicGuard()],
    path: 'auth',
    loadChildren: () =>
      import('./auth/features/auth.routes'),
  },
  {
    canActivateChild: [privateGuard()],
    path: 'cart',
    loadChildren: () => import('./cart/cart.routes'),
  },
  {
    path: 'success',
    loadComponent: () =>
      import('./cart/ui/success/success.component').then((m) => m.default)
  },
  {
    path: 'cancel',
    loadComponent: () =>
      import('./cart/ui/cancel/cancel.component').then((m) => m.default)
  },
  {
    path: '**',
    redirectTo: '',
  }
];
