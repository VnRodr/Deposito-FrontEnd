import { Component } from '@angular/core';
import { StockAndStatus } from "./stock-and-status/stock-and-status";

@Component({
  selector: 'app-stock-groups',
  imports: [StockAndStatus],
  templateUrl: './stock-groups.html',
  styleUrl: './stock-groups.scss'
})
export class StockGroups {

}
