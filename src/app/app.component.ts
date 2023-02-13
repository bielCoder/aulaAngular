import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aulaAngular';
  userName = 'Joaquim';
  userData = {
    email: "gabriel@gmail.com",
    role: "Admin"
  };
}
