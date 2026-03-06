import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './Components/home/home';
import { Navi } from './Components/navi/navi';
import { Products } from './products/products';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home, Navi, Products],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Midterm_app');
}
