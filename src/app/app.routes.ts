import type { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Inicio',
  },
  {
    path: '',
    component: HomeComponent,
    title: 'Acerca De',
  },
  {
    path: '',
    component: HomeComponent,
    title: 'Contacto',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Detalles',
  },
];
