import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  imports: [],
  templateUrl: './accordion-item.html',
  styleUrl: './accordion-item.scss'
})
export class AccordionItem {
  @Input() isOpen = false;
  
  @HostBinding('class') get classes(){
    return 'accordion-item';
  }
}
