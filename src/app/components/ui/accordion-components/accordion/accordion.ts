import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  imports: [CommonModule],
  standalone: true,
  template: '<ng-template></ng-template>',
  styleUrl: './accordion.scss'
})
export class AccordionComponent {
  @Input() allowMultiple = false;
  
  private openItems = new Set<number>();

  toggleItem(index: number) {
    if (!this.allowMultiple) {
      this.openItems.clear();
    }
    
    if (this.openItems.has(index)) {
      this.openItems.delete(index);
    } else {
      this.openItems.add(index);
    }
  }

  isOpen(index: number): boolean {
    return this.openItems.has(index);
  }
}
