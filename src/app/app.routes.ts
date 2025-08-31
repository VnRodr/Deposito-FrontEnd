import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFavoriteCar } from './components/pages/form-favorite-car/form-favorite-car';
import { PaginaInicial } from './components/initial_layout/pagina-inicial/pagina-inicial';

export const routes: Routes = [
  { path: '', component:  PaginaInicial},
  { path: 'form-carro-favorito', component: FormFavoriteCar }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouteModule{}
