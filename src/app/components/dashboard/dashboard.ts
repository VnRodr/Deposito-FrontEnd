import { Component } from '@angular/core';
import { LucideAngularModule, Package } from 'lucide-angular';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [LucideAngularModule, Dialog, ButtonModule, InputTextModule, FormsModule],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class DashboardComponent {
  readonly Package = Package;

  stockGroup!: StockGroup;
  employee!: Employee;

  visible: boolean = false;

  showCreateStockGroupForm() {
    this.visible = true;
  }


}
