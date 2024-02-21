import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {
  
  @Input()
  btnLabel: string = "";

  @Input()
  namePlayer: string = "";

  @Input()
  eloSelected: string = "";

  raffleRealized = true;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
  } 

  addPlayer() {
    this.raffleRealized = false;

    if (this.namePlayer.length <= 0) {
      alert("Digite um nome válido")
    } else {
      if(this.namePlayer.length > 16){
        alert("O nome não pode ter mais de 16 caracteres")
      }else{
        if (this.eloSelected.length <= 0 ) {
          alert("Escolha um elo válido")
        } else {
          this.playerService.addPlayer(this.namePlayer, this.eloSelected)
        }
      }
    }
    
  }
}
