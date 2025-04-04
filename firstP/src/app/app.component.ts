

import { Router, RouterLink,  RouterOutlet } from '@angular/router'; 
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink],
  
  template: `
    <div>
      <nav>
        <ul>
          <li><a routerLink="/car">Car</a></li>            
          <li><a routerLink="/liste">Liste</a></li>        

        </ul>
      </nav>
      <button (click)="navigateToCar()">Go to Car</button>
  <button (click)="navigateToListe()">Go to Liste</button>

      
      <router-outlet></router-outlet> 
    </div>

  `,
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'firstP';
  constructor(private router: Router) {}

  
  navigateToCar() {
    this.router.navigate(['/car']);
  }

  
  navigateToListe() {
    this.router.navigate(['/liste']);
  }
}
