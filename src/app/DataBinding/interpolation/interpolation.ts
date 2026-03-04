import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './interpolation.html',
  styleUrls: ['./interpolation.css']
})
export class Interpolation {

  text: string = 'Hello, this is string interpolation!';
  curly: string = 'Example Text';
  common: string = 'userName';
  methods: string = 'getWelcomeMessage()';
  dotnot: string = 'user.name';
  dotnot2: string = 'user.details?.role';
  jpipe: any;

  title: string = 'Angular String Interpolation Example';
  studentName: string = 'Alice Johnson';
  courseCode: string = 'CS101';
  currentYear: number = new Date().getFullYear();
  isActive: boolean = true;

 
  user = {
    name: 'James Pagnas',
    position: 'Software Engineer',
    department: 'IT',
    details: {
      role: 'Frontend Developer'
    }
  };

  constructor() {
    this.jpipe = this.user;
  }

  getWelcomeMessage(): string {
    return `Welcome ${this.studentName} to course ${this.courseCode}!`;
  }

  skills: string[] = ['Angular', 'TypeScript', 'HTML', 'CSS', 'JavaScript'];
  roles: string[] = ['Admin', 'User', 'Guest', 'Manager'];
  countries: { id: number; name: string }[] = [
    { id: 1, name: 'Philippines' },
    { id: 2, name: 'USA' },
    { id: 3, name: 'Canada' },
    { id: 4, name: 'Japan' }
  ];

  selectedCountryId: number | null = null;

}