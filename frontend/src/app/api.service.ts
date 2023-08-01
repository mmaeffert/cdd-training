// frontend/src/app/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://localhost:3000'; // Change the port if your backend runs on a different port

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.apiUrl}/users`);
  }

  createUser(user: any) {
    return this.http.post(`${this.apiUrl}/users`, user);
  }
}
