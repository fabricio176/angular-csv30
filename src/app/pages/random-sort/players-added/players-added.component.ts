import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-added',
  templateUrl: './players-added.component.html',
  styleUrls: ['./players-added.component.css']
})
export class PlayersAddedComponent implements OnInit {
  players:{name:string, elo:string}[] = [];

  @Input()
  eloSelected:string[] = [];

  @Input()
  namePlayer:string ="";

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.playerAdded$.subscribe(player =>{
      this.players.push(player);
    });
  }

}
