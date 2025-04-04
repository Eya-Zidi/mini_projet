import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-first',
  imports:[FormsModule],
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'] // Correction ici
  
})
export class FirstComponent implements OnInit {
  // Déclaration correcte de la propriété
  name='eya zidi';
  age=28;
  imageUrl='https://repository-images.githubusercontent.com/314186076/79a18fff-1aeb-4a12-9340-db81b383b5e7';
  change(){
    this.name="Ali";
    
  
  }
  text='';
  
  users = {
    name: '7obbi dhia',
    age: 20,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8qaPXQwn07zJioQKi1CX1RBLm6bYd6RWKlg&s', // Correction ici
  };

  constructor() {}

  ngOnInit(): void {
    // Code à exécuter lors de l'initialisation du composant
  }
}
