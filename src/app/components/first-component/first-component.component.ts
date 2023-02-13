import { Component } from "@angular/core";

@Component({
  selector: "app-first-component",
  templateUrl: "./first-component.component.html",
  styleUrls: ["./first-component.component.css"],
})
export class FirstComponentComponent {
  name: string = "Gabriel";
  age : number = 24;
  job : string = "Programador";
  hobbie : string[] = [
      "Correr","Nadar","Pular"
    ];
  car = {
    name: "polo",
    year: 2019
  }

  constructor() {}
}
