import { Component } from '@angular/core';
import { LucideAngularModule, Package } from 'lucide-angular';

@Component({
  selector: 'app-dashboard',
  imports: [LucideAngularModule],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class DashboardComponent {
  readonly Package = Package;
}
