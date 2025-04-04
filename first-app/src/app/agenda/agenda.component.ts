import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-agenda',
  imports: [BrowserModule,FormsModule],
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent {
  // Liste des événements
  events = [
    { heure: '08:00', titre: 'Réunion d\'équipe' },
    { heure: '10:00', titre: 'Appel client' },
    { heure: '14:00', titre: 'Travail sur le projet' }
  ];

  // Nouvel événement
  newEvent = { heure: '', titre: '' };

  // Ajouter un événement
  ajouterEvenement() {
    if (this.newEvent.heure && this.newEvent.titre) {
      this.events.push({ ...this.newEvent });
      this.newEvent = { heure: '', titre: '' }; // Réinitialiser les champs
    }
  }
}
