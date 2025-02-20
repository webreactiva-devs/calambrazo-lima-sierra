import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () =>
      import('./about.component').then((m) => m.AboutComponent),
  },
] as Routes;
