import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-random-sort',
  templateUrl: './random-sort.component.html',
  styleUrls: ['./random-sort.component.css']
})
export class RandomSortComponent implements OnInit {

  myOptions:string[] = ['Padrao', 'Por elo'];
  numTeams:number = 0;
  typeSort:string = "";

  namePlayer:string = "";

  eloSelected:string = "";
  elos:string[] = ['Sem Elo', 'Ferro', 'Bronze', 'Prata', 'Ouro', 'Platina', 'Esmeralda', 'Mestre', 'Grão-Mestre', 'Desafiante'];

  raffleRealized = false;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.raffleResult$.subscribe( result =>{
      this.raffleRealized = true;
    })
  }

  

}
