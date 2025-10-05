import { Component} from '@angular/core';
import { Item } from '../../../models/item.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-receive-item',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './receive-item.html',
  styleUrl: './receive-item.scss'
})
export class ReceiveItem {
  item!: Item; //Ver um jeito de add um id pra essa porcaria
}
