import { Component, inject, OnInit } from '@angular/core';
import { StockAndStatus } from "./stock-and-status/stock-and-status";
import { StockGroupService } from '../../services/stock-group-service';

@Component({
  selector: 'app-stock-groups',
  imports: [StockAndStatus],
  templateUrl: './stock-groups.html',
  styleUrl: './stock-groups.scss'
})
export class StockGroups implements OnInit{
  stockGroupList: StockGroup[] = [];
  private stockGroupService = inject(StockGroupService);

  ngOnInit(): void {
    this.stockGroupService.refreshStockGroups();

    this.stockGroupService.refreshNeeded.subscribe(() => {
      console.log('Refresh notification received!');
      this.loadStockGroups();
    })
  }

  loadStockGroups(){
    this.stockGroupService.getAllStocks().subscribe(groups => {
      this.stockGroupList = groups; // Update the list
    });
  }
}
