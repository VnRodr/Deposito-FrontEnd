import { Component } from '@angular/core';
import { LucideAngularModule, TriangleAlert} from 'lucide-angular';

@Component({
  selector: 'app-stocks-in-alert',
  imports: [LucideAngularModule],
  templateUrl: './stocks-in-alert.html',
  styleUrl: './stocks-in-alert.scss'
})
export class StocksInAlert {
  readonly TriangleAlert = TriangleAlert;   
}
