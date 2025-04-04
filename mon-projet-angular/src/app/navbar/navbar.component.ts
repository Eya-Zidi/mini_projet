import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router , RouterOutlet} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] 
})
export class NavbarComponent {
  constructor(private location: Location, private router: Router) {}

  goBack() {
    this.location.back();
  }

}
