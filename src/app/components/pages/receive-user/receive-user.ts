import { Component} from '@angular/core';
import { Item } from '../../../models/item.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-receive-user',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './receive-user.html',
  styleUrl: './receive-user.scss'
})
export class ReceiveUser {
  item!: Item; //Ver um jeito de add um id pra essa porcaria
}
