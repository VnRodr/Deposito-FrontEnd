import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicial } from './components/initial_layout/pagina-inicial/pagina-inicial';
import { FormList } from './components/pages/form-list/form-list';

export const routes: Routes = [
  { path: '', component:  PaginaInicial},
  { path: 'usersList', component: FormList }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouteModule{}
