import { Injectable } from '@angular/core';
import { environment } from '../environment/environment.prod';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private html:HttpClient){}

  //As funções mandam e depois validam se tudo está correto, o backend só envia sucesso ou falha depois
  getUsers():Observable<User[]>{
    return this.html.get<User[]>(environment.apiBaseUrl+"/user/users").pipe(
        catchError(error => {
          console.error("Error fetching users:", error);
          return throwError(() => new Error("Failed to load users"));
        })
      );
  }

  postUser(user:User):Observable<User>{
    return this.html.post<User>(environment.apiBaseUrl+"/user/create-user", user).pipe(catchError(
      error => {console.error("Error creating user", error); return throwError(() => new Error("Failed to create user"))}
    ));
  }

}
