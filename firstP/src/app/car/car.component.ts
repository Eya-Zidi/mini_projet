import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-car',
  imports: [FormsModule],
  
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit {
  
  photoUrl?:string;
  price!:number;
  marque?:string;


  ngOnInit(): void {
    this.price=200;
    this.marque="BMW";
    this.photoUrl="https://auto.dev/images/forsale/2025/01/05/10/19/2019_honda_civic-pic-6070451549432894605-1024x768.jpeg";
  }
f1():void{
  this.price+=100;

}

}
