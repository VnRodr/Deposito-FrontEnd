import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from 'express';
import { LucideAngularModule, Package, DollarSign } from 'lucide-angular';

@Component({
  selector: 'app-stock-and-status',
  imports: [LucideAngularModule],
  templateUrl: './stock-and-status.html',
  styleUrl: './stock-and-status.scss'
})
export class StockAndStatus {
  protected readonly Package = Package;
  protected readonly DollarSign = DollarSign;

  @Input() public stockGroup!: StockGroup;

  private router = inject(Router);

  protected goToStockItemsPage(stockGroupName: string) {
    this.router.navigate(['/stockItens', stockGroupName]);
  }

}


