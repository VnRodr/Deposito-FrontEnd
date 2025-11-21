import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-summary',
  imports: [],
  templateUrl: './stock-summary.html',
  styleUrl: './stock-summary.scss'
})

export class StockSummary {
  stockSummaryItem!: StockSummaryItem;
}


interface StockSummaryItem {
//  icon: Type of icon component;
  label: string;
  value: string | number;
  iconColor: string;
  bgColor: string;
}