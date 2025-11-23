import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-summary',
  imports: [],
  standalone: true,
  templateUrl: './stock-summary.html',
  styleUrl: './stock-summary.scss'
})

export class StockSummaryComponent {
  stockSummaryItem!: StockSummaryItem;
}


interface StockSummaryItem {
//  icon: Type of icon component;
  label: string;
  value: string | number;
  iconColor: string;
  bgColor: string;
}