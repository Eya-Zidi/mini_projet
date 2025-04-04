import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { MatCardModule } from '@angular/material/card';
import { AgendaComponent } from './agenda/agenda.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComponent,FormsModule,AgendaComponent, DirectivesComponent,MatCardModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'first-app';
}

