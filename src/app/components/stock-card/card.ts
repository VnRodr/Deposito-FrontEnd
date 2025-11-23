import { Component } from '@angular/core';
import { LucideAngularModule, Package } from 'lucide-angular';

@Component({
  selector: 'app-card',
  imports: [LucideAngularModule],
  templateUrl: './card.html',
  standalone: true,
  styleUrl: './card.scss'
})
export class Card {
  readonly Package = Package;

  stockGroups: StockGroup[] = [];
}
