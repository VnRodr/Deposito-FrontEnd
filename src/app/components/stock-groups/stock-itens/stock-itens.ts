import { Component } from '@angular/core';
import { LucideAngularModule, LucideIconData, Package, SquarePen, Trash } from 'lucide-angular';
import { StockAndStatus } from '../stock-and-status/stock-and-status';
import { Item } from '../../../data/item';
import { Status } from '../../../enums/status';

@Component({
  selector: 'app-stock-itens',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './stock-itens.html',
  styleUrl: './stock-itens.scss'
})
export class StockItens {
  readonly Package = Package;
  readonly SquarePen: LucideIconData = SquarePen;
  readonly Trash: LucideIconData = Trash;

  stockData: StockAndStatus = new StockAndStatus();
  item!: Item; status!: Status;
}
