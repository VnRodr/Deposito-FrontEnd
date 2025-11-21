import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-card',
  imports: [],
  templateUrl: './stock-card.html',
  styleUrl: './stock-card.scss'
})


export class StockCard {

}

interface StockGroup {
  id: number;
  name: string;
  totalItems: number;
  value: number;
  lowStock: number;
  status: "good" | "warning";
}
