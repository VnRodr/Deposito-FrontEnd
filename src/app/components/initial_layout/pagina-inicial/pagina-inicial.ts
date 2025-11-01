import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pagina-inicial',
  imports: [ButtonModule, SelectButtonModule, FormsModule, RouterOutlet],
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
      this.router.navigate(['user/create-an-user']);
    }
    if (this.value === 'criarItem') {
      this.router.navigate(['item/create-an-item']);
    }
  }
}
