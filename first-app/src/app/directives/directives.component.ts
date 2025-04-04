import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-directives',
  imports: [FormsModule,CommonModule,MatCardModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent implements OnInit {
  display=true;
  imageUrl='https://i0.wp.com/www.poulesenville.com/wp-content/uploads/2020/04/img-0549.jpeg?fit=900%2C900&ssl=1';
  v=true;
  cars=[
    'hhvvxK',
    'hhw',
    'vbnl',
    '4523',
    '45288888'
  ]
  koffa='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyC8a0vmYyqd1F8_2sEXeYeH0LXe1jTQ3s_w&s';
  constructor() { }
  ngOnInit():void{


  }
}
