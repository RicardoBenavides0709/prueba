import { Component, Input, input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'appimg',
  imports: [

  ],
  templateUrl: './img.html',
  styleUrl: './img.scss'
})


export class img {

  @Input() img: String ='valor inicial';




}
