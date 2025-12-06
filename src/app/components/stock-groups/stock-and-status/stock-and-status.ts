import { Component, Input } from '@angular/core';
import { LucideAngularModule, Package, DollarSign } from 'lucide-angular';

@Component({
  selector: 'app-stock-and-status',
  imports: [LucideAngularModule],
  templateUrl: './stock-and-status.html',
  styleUrl: './stock-and-status.scss'
})
export class StockAndStatus {
  readonly Package = Package;
  readonly DollarSign = DollarSign;

  @Input() stockGroup: StockGroup =
    {
      id: "1",
      name: 'Electronics',
      totalItems: 150,
      value: 50000,
      lowStock: 10,
      status: 'good',
      responsible: {
        id: "1",
        name: 'John Doe',
        department: 'Inventory Management',
        email: 'JohnDoe@gmail.com',
        phone: '123-456-7890',
      }
    }
}


