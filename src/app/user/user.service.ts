import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiServerUrl+"/user/all"}`);
  }
  public addUser(user : User): Observable<User>{
    return this.http.post<User>(`${this.apiServerUrl}/user/add`, user);
  }
  public deleteUser(userId : number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/user/deleteUser/${userId}`);
  }
  public getUserById(userId : number): Observable<User>{
    return this.http.get<User>(`${this.apiServerUrl}/user/find/${userId}`);
  }
}
