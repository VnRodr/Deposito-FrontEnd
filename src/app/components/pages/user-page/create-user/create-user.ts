import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../../service/user-service';
import { User } from '../../../../models/user.model';
import {v7 as generateUuid7} from 'uuid';

@Component({
  selector: 'app-create-user',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './create-user.html',
  styleUrl: './create-user.scss'
})
export class CreateUser {
  user!:User;

  constructor(private userService:UserService){}

  onSubmit(){
    this.user.id = generateUuid7();

    this.userService.postUser(this.user).subscribe({
    next: response => {
      console.log("User created successfully:", response);
    },
    error: err => {
      console.error("Error creating user:", err);
    }
  });
  }
}
