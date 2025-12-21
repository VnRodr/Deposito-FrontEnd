import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from 'express';
import { LucideAngularModule, Package, DollarSign } from 'lucide-angular';
import { StockGroupService } from '../../../services/stock-group-service';

@Component({
  selector: 'app-stock-and-status',
  imports: [LucideAngularModule],
  templateUrl: './stock-and-status.html',
  styleUrl: './stock-and-status.scss'
})
export class StockAndStatus {
  readonly Package = Package;
  readonly DollarSign = DollarSign;

  @Input() stockGroup!: StockGroup;

  stockGroupService: StockGroupService = new StockGroupService();

  private router = inject(Router);

  goToStockItemsPage(stockGroupName: string) {
    this.router.navigate(['/stockItens', stockGroupName]);
  }

}


