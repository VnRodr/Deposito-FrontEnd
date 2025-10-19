import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PaginaInicialHeader } from './pagina-inicial-header/pagina-inicial-header';
import { FormList } from "../../pages/form-list/form-list";
import { SelectButton } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pagina-inicial',
  imports: [ButtonModule, SelectButton, FormsModule, RouterOutlet],
  standalone:true,
  templateUrl: './pagina-inicial.html',
  styleUrl: './pagina-inicial.scss'
})
export class PaginaInicial {
  pageSelection: any[] = [{ label: 'Criar usuário', value: 'criarUsuario' },{ label: 'Criar item', value: 'criarItem' }];

  value: string = 'off';

  constructor(private router: Router) {}

  onClick() {
    if (this.value === 'criarUsuario') {
      this.router.navigate(['user/create-user']);
    } else if (this.value === 'criarItem') {
      this.router.navigate(['item/create-item']);
    }
  }
}
