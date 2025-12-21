import { Component } from '@angular/core';
import { LucideAngularModule, Package } from 'lucide-angular';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee-service';
import { StockGroupService } from '../../services/stock-group-service';

@Component({
  selector: 'app-dashboard',
  imports: [LucideAngularModule, Dialog, ButtonModule, InputTextModule, FormsModule],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})

export class DashboardComponent {
  readonly Package = Package;

  employeeService: EmployeeService = new EmployeeService();
  stockGroupService: StockGroupService = new StockGroupService();

  employee: Employee = {
    id: '',
    name: '',
    department: '',
    email: '',
    phone: ''
  };
  
  stockGroup: StockGroup = {
    id: '',
    name: '',
    totalItems: 0,
    value: 0,
    lowStock: 0,
    status: 'warning',
    responsible: {
      id: this.employee.id, name: this.employee.name,
      department: this.employee.department,
      email: this.employee.email,
      phone: this.employee.phone
    }
  };

  visible: boolean = false;

  showCreateStockGroupForm() {
    this.visible = true;
  }

  onConfirm() {
    this.visible= false;

    this.employeeService.createNewEmployee(this.employee).subscribe({
      next: (employee) => {
        console.log('Employee created successfully:', employee);
      },
      error: (error) => {
        console.error('Error creating employee:', error);
      }
    });

    this.stockGroupService.createNewStock(this.stockGroup).subscribe({
      next: (stockGroup) => {
        console.log('Stock group created successfully:', stockGroup);

        this.stockGroupService.refreshStockGroups();
      },
      error: (error) => {
        console.error('Error creating stock group:', error);
      }
    });
  }

}
