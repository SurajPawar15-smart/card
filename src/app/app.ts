import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BusinessCard } from './components/business-card/business-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,BusinessCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('card');
}
