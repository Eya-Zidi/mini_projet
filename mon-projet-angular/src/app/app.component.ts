import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { PasteventComponent } from "./pastevent/pastevent.component";
import { MainComponent } from "./main/main.component";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent} from "./footer/footer.component";
import { EventComponent} from "./event/event.component";
import { ListeComponent} from "./liste/liste.component";
import { Location } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [NavbarComponent, MainComponent, CommonModule,FooterComponent,EventComponent,PasteventComponent,ListeComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private location: Location, private router: Router) {}
  title = 'mon-projet-angular';
  currentComponent: number = 1; // default is 'main'

  // Function to switch components
  switchComponent(component: number) {
    this.currentComponent = component;
  }

  goBack() {
    this.location.back();
  }

  navigateToCar() {
    this.router.navigate(['/liste']); 
  }

}



