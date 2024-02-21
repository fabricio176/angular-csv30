import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-btn-sort',
  templateUrl: './btn-sort.component.html',
  styleUrls: ['./btn-sort.component.css']
})
export class BtnSortComponent implements OnInit {
  @Input()
  btnLabel: string = "";

  @Input()
  typeSort:string = "";

  @Input()
  numTeams:number = 0 ;

  constructor(private playerService:PlayerService) { }

  ngOnInit(): void {
  }

  raffleRealized = false;

  raffle(){

    this.raffleRealized = true;

    if(this.numTeams <= 0){
      alert("Digite um valor válido");
    } else{
      this.playerService.raffle(this.typeSort, this.numTeams);
    }
  }
}
