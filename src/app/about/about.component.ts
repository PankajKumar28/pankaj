import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css', 
  standalone: true
})
export class AboutComponent {
  todayYear: number = 2024;
  email: string = 'pankajkumar.vce@gmail.com';
  emailOffice: string = 'pankaj.kumar@gunaatita.com';
  totalExp: number = 8;
  constructor() {
    this.todayYear = new Date().getFullYear();
    this.totalExp = this.todayYear - 2015 - 1;
  }
}
