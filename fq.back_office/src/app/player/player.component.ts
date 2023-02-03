import { Component } from '@angular/core';
import { Player } from '../models/player/player';
import { PlayerService } from '../services/player/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {

  public playerList: Player[] = [];
  public displayedColumns: string[] = ['id', 'lastName', 'firstName'];

  constructor(private playerService: PlayerService) {
    this.playerService.getPlayerList().subscribe(((playerList: Player[]) => this.playerList = playerList));
  }

}
