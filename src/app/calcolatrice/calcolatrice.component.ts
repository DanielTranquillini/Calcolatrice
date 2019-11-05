import { Component} from '@angular/core';
import { Calcolatrice} from './calcolatrice.model.ts';

@Component({
  selector: 'app-calcolatrice',
  templateUrl: './calcolatrice.component.html',
  styleUrls: ['./calcolatrice.component.css']
})

export class CalcolatriceComponent{
  
  calcolatrice: Calcolatrice = new Calcolatrice("0");

}