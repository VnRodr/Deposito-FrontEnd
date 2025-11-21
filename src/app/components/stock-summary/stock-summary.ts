import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-summary',
  imports: [],
  templateUrl: './stock-summary.html',
  styleUrl: './stock-summary.scss'
})

export class StockSummary {
  stockSummaryItems: StockSummaryItem[] = []; //por enquanto é uma lista
}


interface StockSummaryItem {
//  icon: Type of icon component;
  label: string;
  value: string | number;
  iconColor: string;
  bgColor: string;
}