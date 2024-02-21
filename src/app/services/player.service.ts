import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  private playerAddedSource = new Subject<{ name: string, elo: string }>();
  private raffleResultSource = new Subject<any>();

  raffleResult$ = this.raffleResultSource.asObservable();
  playerAdded$ = this.playerAddedSource.asObservable();

  elos:string[] = ['Sem Elo', 'Ferro', 'Bronze', 'Prata', 'Ouro', 'Platina', 'Esmeralda', 'Mestre', 'Grão-Mestre', 'Desafiante']
  players: { name: string, elo: string }[] = [];

  addPlayer(player: string, elo: string) {
    if (this.players.length < 190) {
      this.players.push({ name: player, elo: elo });
      this.playerAddedSource.next({ name: player, elo: elo });
    } else {
      alert("Limite de 190 jogadores atingido");
    }
  }

  raffle(opcao: string, numTeams: number) {
    let teams: any[] = [];
    for (let i = 0; i < numTeams; i++){
      teams.push([]);
    }


    if (opcao === 'Padrao') {
      for (let i = 0; i < this.players.length; i++) {
        teams[i % numTeams].push(this.players[i]);
      }
    } else if (opcao === 'Por Elo'){
      let playersOrdened = this.players.sort((a, b) => this.elos.indexOf(a.elo) - this.elos.indexOf(b.elo));

      for (let i = 0; i< playersOrdened.length; i++){
        teams[i % numTeams].push(playersOrdened[i]);
      }
    }

    let result =  teams.map((team, i) => ({number:i + 1, players: team}));

    this.raffleResultSource.next(result);
    
    console.log(this.players);

    return result;
  }

}
