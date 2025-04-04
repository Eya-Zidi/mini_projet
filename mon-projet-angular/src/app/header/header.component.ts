import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logo='';
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
  

}
