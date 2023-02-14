import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';


@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
    animals: Animal[] = [
    {name : "Turca",type : "Dog",age: 4},
    {name :  "Lili",type : "Gato",age: 5},
    {name : "Dara",type : "Papagaio",age: 1}
    ] 

    animalDetails = '';

    constructor()
    {

    }

    showAge(animal: Animal) : void
    {
      this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos de idade.`;
    } 
}
