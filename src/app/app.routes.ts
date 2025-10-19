import { Routes } from '@angular/router';
import { PaginaInicial } from './components/initial_layout/pagina-inicial/pagina-inicial';
import { CreateUser } from './components/pages/user-page/create-user/create-user';

export const routes: Routes = [
  { 
    path: '', 
    component:  PaginaInicial,
    children:[
    {path: 'user/create-user', component: CreateUser}
    ]
  }

];

