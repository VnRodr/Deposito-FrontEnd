import { Component } from '@angular/core';
import { LucideAngularModule, TrendingUp } from 'lucide-angular';

@Component({
  selector: 'app-total-items',
  imports: [LucideAngularModule],
  templateUrl: './total-items.html',
  styleUrl: './total-items.scss'
})
export class TotalItems {
  readonly TrendingUp = TrendingUp; 

  stockItems!: StockGroup;
}
