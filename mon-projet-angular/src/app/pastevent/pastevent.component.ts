import { Component,OnInit} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-pastevent',
  imports: [MatCardModule,CommonModule ],
  templateUrl: './pastevent.component.html',
  styleUrl: './pastevent.component.css',
  standalone: true
})
export class PasteventComponent implements OnInit{
  free='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQql27JWrMbgBudzzRc6jajsVoDZEnVqq8i-g&s';
  @Output() changeComponent = new EventEmitter<number>();
  onSwitchComponent(component: number) {
  this.changeComponent.emit(component); 
  }
  constructor() { }
  ngOnInit():void{


  }
}
