import { Injectable } from '@angular/core';
import { environment } from '../environment/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private html:HttpClient){}

  getUsers():Observable<User[]>{
    return this.html.get<User[]>(environment+"/users");
  }

  postUser(user:User):Observable<User>{
    return this.html.post<User>(environment+"/create-user", user);
  }

}
