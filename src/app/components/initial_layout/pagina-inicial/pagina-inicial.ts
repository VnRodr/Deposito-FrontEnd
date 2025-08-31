import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-pagina-inicial',
  imports: [ButtonModule],
  standalone:true,
  templateUrl: './pagina-inicial.html',
  styleUrl: './pagina-inicial.scss'
})
export class PaginaInicial {

}
