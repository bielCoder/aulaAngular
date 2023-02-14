import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-operators',
  templateUrl: './pipe-operators.component.html',
  styleUrls: ['./pipe-operators.component.css']
})
export class PipeOperatorsComponent {
  someText : string = "TESTANDO O PIPE OPERATOR";
  today = new Date();

  constructor()
  {

  }
}
