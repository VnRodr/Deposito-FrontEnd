import { Component } from '@angular/core';
import { User } from '../../../models/user.model';
import { UserService } from '../../../service/user-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  imports: [FormsModule],
  templateUrl: './create-user.html',
  styleUrl: './create-user.scss'
})
export class CreateUser {
  user!:User;

  constructor(private userService:UserService){}

  onSubmit(){


  }
}
