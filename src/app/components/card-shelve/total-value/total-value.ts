import { Component } from '@angular/core';

import { LucideAngularModule, DollarSign } from 'lucide-angular';

@Component({
  selector: 'app-total-value',
  imports: [LucideAngularModule],
  templateUrl: './total-value.html',
  styleUrl: './total-value.scss'
})
export class TotalValue {
  readonly DollarSign = DollarSign;
}
