import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property.html',
  styleUrl: './property.css',
})
export class Property {

  // Button property
  isButtonDisabled: boolean = false;

  onButtonClick(): void {
    this.isButtonDisabled = true;
  }

  // Image properties
  imageSource: string = 'https://blogs-images.forbes.com/danidiplacido/files/2017/09/batman-312342_960_720.png';
  imageAlt: string = 'Sample Placeholder Image';
  imageWidth: number = 300;

  // Link property
  linkUrl: string = 'https://www.ubaguio.edu/';

  // Input property
  inputPlaceholder: string = 'Enter your full name';
}