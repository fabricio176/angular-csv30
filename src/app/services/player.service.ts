import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  private playerAddedSource = new Subject<{ name: string, elo: string }>();


  playerAdded$ = this.playerAddedSource.asObservable();
  players: { name: string, elo: string }[] = [];

  addPlayer(player: string, elo: string) {
    if (this.players.length < 190) {
      this.players.push({name:player, elo: elo});
      this.playerAddedSource.next({name:player, elo:elo});
    } else {
      alert("Limite de 190 jogadores atingido");
    }
  }
}
