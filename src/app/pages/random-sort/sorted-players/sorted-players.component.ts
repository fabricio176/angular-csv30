import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-sorted-players',
  templateUrl: './sorted-players.component.html',
  styleUrls: ['./sorted-players.component.css']
})
export class SortedPlayersComponent implements OnInit {
  teams:any[] = [];
  
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.raffleResult$.subscribe(result =>{
      this.teams = result;
    })
  }

}
