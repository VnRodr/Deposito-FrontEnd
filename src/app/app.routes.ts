import { Routes } from '@angular/router';
import { PaginaInicial } from './components/initial_layout/pagina-inicial/pagina-inicial';
import { CreateUser } from './components/pages/user-page/create-user/create-user';
import { CreateItem } from './components/pages/create-item/create-item';

export const routes: Routes = [
  { path: '', component:  PaginaInicial, title: "Página inicial"},
  { path: 'item/create-an-item', component: CreateItem, title: "Criar item"}
];

