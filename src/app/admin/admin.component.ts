import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
// Lecture 58 :  Route Lazy Loading in Angular 
  // code write in app.roues and app.ts and app.html file
constructor() {
  console.log("Admin component loaded");
  // this log is show when your lazy loading work means if we required the admin page and i go to admin page so console.log (Admin component loaded)   show in home page Admin component loaded is not show
}
}
