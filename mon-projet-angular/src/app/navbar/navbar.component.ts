import { Component } from '@angular/core';
import { Router,RouterOutlet} from '@angular/router'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true, // ✅ 
  imports: [RouterOutlet] 
})
export class NavbarComponent {

  constructor(private router: Router) {} 

  navigateToCar() {
    this.router.navigate(['/pastevent']); 
  }

}
