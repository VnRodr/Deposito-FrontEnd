import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChevronDown, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-accordion-trigger',
  imports: [CommonModule, LucideAngularModule],
  standalone: true,
  templateUrl: './accordion-trigger.html',
  styleUrl: './accordion-trigger.scss'
})
export class AccordionTriggerComponent {
  @Input() isOpen = false;
  @Output() toggle = new EventEmitter<void>();

  readonly ChevronDownIcon = ChevronDown;
}
