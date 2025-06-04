import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Img } from './components/img/img';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'mystore';
}
