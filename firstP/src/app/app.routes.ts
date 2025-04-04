import { Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { ListeClientComponent } from './liste-client/liste-client.component';

export const routes: Routes = [
  { path: 'car', component: CarComponent },
  { path: 'liste', component: ListeClientComponent },
  { path: '', redirectTo: '/liste', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/liste' } 
];


