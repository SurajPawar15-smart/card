import { CommonModule, NgFor } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-business-card',
  imports: [CommonModule],
  templateUrl: './business-card.html',
  styleUrl: './business-card.css',
})
export class BusinessCard {
isFlipped = false;
  name = 'Suraj Pawar';
  jobTitle = 'Full Stack Developer';
  company = 'Tech Innovations Inc.';
  email = 'alex.johnson@email.com';
  phone = '+1 (555) 123-4567';
  website = 'www.alexjohnson.dev';
  about = 'Passionate developer with 5+ years of experience in building modern web applications. I love creating elegant solutions to complex problems and collaborating with diverse teams.';
  skills = ['Angular', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'];

  get initials(): string {
    return this.name
      .split(' ')
      .map(n => n[0])
      .join('');
  }

  flipCard(): void {
    this.isFlipped = !this.isFlipped;
  }

}

