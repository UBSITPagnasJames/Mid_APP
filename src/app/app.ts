import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './Components/home/home';
import { Navi } from './Components/navi/navi';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home, Navi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Midterm_app');
}
