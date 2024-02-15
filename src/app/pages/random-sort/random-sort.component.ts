import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-sort',
  templateUrl: './random-sort.component.html',
  styleUrls: ['./random-sort.component.css']
})
export class RandomSortComponent implements OnInit {
  elos:string[] = ['Sem Elo', 'Ferro', 'Bronze', 'Prata', 'Ouro', 'Platina', 'Esmeralda', 'Mestre', 'Grão-Mestre', 'Desafiante']
  namePlayer:string = "";
  eloSelected:string = "";


  constructor() { }

  ngOnInit(): void {
    console.log(this.eloSelected);
  }

  

}
