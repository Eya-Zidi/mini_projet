import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-main',
  imports: [MatCardModule,CommonModule ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  koffa='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyC8a0vmYyqd1F8_2sEXeYeH0LXe1jTQ3s_w&s';
  school='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBFRrLpl4Jk4U_iUOUrZ93eY8r9h65DVWhJw&s';
  free='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQql27JWrMbgBudzzRc6jajsVoDZEnVqq8i-g&s';
  felastine='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYM-1wvDNs9wpxQLtBcCRGkR9AUnRtfPOXA&s';
  cancer='https://lirp.cdn-website.com/69c0b277/dms3rep/multi/opt/World+cancer+day+2025-Theme+-+United+by+Unique+-+PACE+Hospitals-Hyderabad-640w.jpg';
  blood='https://accordhospitals.co.in/blogs/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-14-at-12.10.13-1.webp';
  @Output() changeComponent = new EventEmitter<number>();

  // Method to emit the event with the component number
  onSwitchComponent(component: number) {
    this.changeComponent.emit(component);  // Emit the component number to parent
  }
  constructor() { }
  ngOnInit():void{


  }
}
