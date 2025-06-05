import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { img } from './components/img/img';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone:true,
  imports: [img,
    FormsModule,
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  imgParent = '';
}

//https://www.w3schools.com/howto/img_avatar.png
