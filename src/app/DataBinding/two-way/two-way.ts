import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './two-way.html',
  styleUrl: './two-way.css'
})
export class TwoWay {
  twoWName: string = '';
  twoWayName: string = '';
  twoWayEmail: string = '';
  twoWayAge: number = 18;
  twoWayGender: string = '';
  twoWaySubscribed: boolean = false;

  rangeValue: number = 0;

  twoWayLanguage: string = '';
  programmingLanguages: string[] = [
    'Java',
    'Python',
    'C#',
    'JavaScript',
    'TypeScript'
  ];

  twoWayColor: string = '#ff0000';

  user = [
    {
      id: 1,
      name: 'John Doe',
      department: 'IT',
      position: 'Developer',
      role: 'Frontend'
    },
    {
      id: 2,
      name: 'Jane Smith',
      department: 'HR',
      position: 'Manager',
      role: 'Recruitment'
    },
    {
      id: 3,
      name: 'Mark Lee',
      department: 'Finance',
      position: 'Analyst',
      role: 'Auditing'
    }
  ];

  selectedId: number | null = null;
  selectedName: string = '';
  selectedDepartment: string = '';
  selectedPosition: string = '';
  selectedRole: string = '';

  onClick(u: any): void {
    this.selectedId = u.id;
    this.selectedName = u.name;
    this.selectedDepartment = u.department;
    this.selectedPosition = u.position;
    this.selectedRole = u.role;
  }

  resetForm(): void {
    this.twoWName = '';
    this.twoWayName = '';
    this.twoWayEmail = '';
    this.twoWayAge = 18;
    this.twoWayGender = '';
    this.twoWaySubscribed = false;
    this.rangeValue = 0;
    this.twoWayLanguage = '';
    this.twoWayColor = '#ff0000';
  }

  get profileSummary(): string {
    return `
      Name: ${this.twoWayName || 'N/A'},
      Email: ${this.twoWayEmail || 'N/A'},
      Age: ${this.twoWayAge},
      Gender: ${this.twoWayGender || 'N/A'},
      Language: ${this.twoWayLanguage || 'N/A'},
      Subscribed: ${this.twoWaySubscribed ? 'Yes' : 'No'}
    `;
  }

}