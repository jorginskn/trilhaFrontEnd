import { user } from './user.model';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(private http: HttpClient) {}
  getUserById(Id: any){
  }
  setUser(users: any): any {}
  deleteUser(userId: number): any {}
}
