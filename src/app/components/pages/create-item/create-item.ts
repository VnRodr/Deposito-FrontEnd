import { Component} from '@angular/core';
import { Item } from '../../../models/item.model';
import { FormsModule } from '@angular/forms';
import {v7 as generateUuid7, v7} from 'uuid';
import { ItemService } from '../../../service/item-service';

@Component({
  selector: 'app-create-item',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './create-item.html',
  styleUrl: './create-item.scss'
})
export class CreateItem {
  item!: Item; //Ver um jeito de add um id pra essa porcaria
  //createId:string = generateUuid7();

  constructor(private itemService:ItemService){}

  onSubmit(){
    //Vai ser o seguinte: aperta botão -> cria objeto
    this.item.id = generateUuid7();

    //this.itemService.
  }
}
