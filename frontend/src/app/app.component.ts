// frontend/src/app/app.component.ts
import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Users</h1>
    <ul>
      <li *ngFor="let user of users">{{ user.name }} ({{ user.email }})</li>
    </ul>
    <form (submit)="createUser()">
    <mat-form-field>
      <input matInput type="text" [(ngModel)]="newUser.name" name="name" placeholder="Name">
    </mat-form-field>
    <mat-form-field>
      <input matInput type="text" [(ngModel)]="newUser.email" name="email" placeholder="Email">
    </mat-form-field>
    <mat-form-field>
      <input matInput type="text" [(ngModel)]="newUser.password" name="password" placeholder="Password">
    </mat-form-field>
      <button mat-raised-button color="primary" type="submit">Create User</button>
    </form>
  `,
  styles: []
})
export class AppComponent {
  users: any[] = [];
  newUser: any = { name: '', email: '' , password: ''};

  constructor(private apiService: ApiService) {
    this.getUsers();
  }

  getUsers() {
    this.apiService.getUsers().subscribe((users: any) => {
      this.users = users;
    });
  }

  createUser() {
    this.apiService.createUser(this.newUser).subscribe(() => { // Subscribe handles the http response
      this.getUsers(); // Refresh the list after creating a new user
      this.newUser = { name: '', email: '' }; // Clear the form fields
    });
  }
}
