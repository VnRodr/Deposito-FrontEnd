import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, CircleAlert, Package, DollarSign } from 'lucide-angular';

@Component({
  selector: 'app-stock-card',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './stock-card.html',
  standalone: true,
  styleUrl: '../../styles/globals.scss'
})

export class StockCardComponent {
  stockGroup!: StockGroup;

  statusColor = this.stockGroup.status === "warning"
    ? "stock-card card shadow-sm warning"
    : "stock-card card shadow-sm";

  readonly CircleAlert = CircleAlert;
  readonly Package = Package;
  readonly DollarSign = DollarSign;  
}

interface StockGroup {
  id: number;
  name: string;
  totalItems: number;
  value: number;
  lowStock: number;
  status: "good" | "warning";
}
