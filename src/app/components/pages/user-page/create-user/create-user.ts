import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../../service/user-service';
import { User } from '../../../../models/user.model';

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
