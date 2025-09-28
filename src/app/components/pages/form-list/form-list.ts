import { Component } from '@angular/core';
import { User } from '../../../models/user.model';
import { Item } from '../../../models/item.model';

@Component({
  selector: 'app-form-list',
  imports: [],
  templateUrl: './form-list.html',
  styleUrl: './form-list.scss'
})
export class FormList {
  items:Item[] = [];
}
