import { Routes } from '@angular/router';
import { HomeComponent } from './core/features/home/home.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module')
      .then(esm => esm.BookingModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
