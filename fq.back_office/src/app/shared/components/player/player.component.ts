import { Component } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { Player } from 'src/app/models/player/player';
import { PlayerService } from 'src/app/services/player/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {

  public playerList: Player[] = [];
  public displayedColumns: string[] = ['id', 'lastName', 'firstName'];
  public createFormIsVisible: boolean = false;
  public editFormIsVisible: boolean = false;
  public playerForm: FormGroup = new FormGroup({
    lastName: new FormControl(),
    firstName: new FormControl(),
    acceptableAnswers: new FormControl(),
    pictureUrl: new FormControl()
  });

  constructor(private playerService: PlayerService) {
    this.playerService.getPlayerList().subscribe(((playerList: Player[]) => this.playerList = playerList));
  }

}
