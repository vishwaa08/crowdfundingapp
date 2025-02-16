import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/users'; 

  constructor(private http:HttpClient) { }

  getUser(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}/all`);
  }
  getUserById(UserId:number): Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/${UserId}`)
  }
  updateUser(userId:number, userData: any): Observable<User>{
    return this.http.put<User>(`${this.apiUrl}/${userId}`, userData);
  }
  addUser(User:User):Observable<User>{
    return this.http.post<User>(`${this.apiUrl}/add`, User);
  }
  deleteUser(UserID:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${UserID}`);
  }
}
