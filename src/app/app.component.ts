import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FactComponent } from './fact/fact.component';
import { ResumeComponent } from './resume/resume.component';
import { ServicesComponent } from './services/services.component';
import { SkillComponent } from './skill/skill.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true,
  imports:[AboutComponent,FactComponent,ContactComponent,ServicesComponent,ResumeComponent,SkillComponent,TestimonialComponent]
})
export class AppComponent {
  todayYear: number = 2024;
  totalExp: number = 8;
  email: string = 'pankajkumar.vce@gmail.com';
  emailOffice: string = 'pankaj.kumar@gunaatita.com';
  constructor() {
    this.todayYear = new Date().getFullYear();
    this.totalExp = this.todayYear - 2015 - 1;

  }
}
