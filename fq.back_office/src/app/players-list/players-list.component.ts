import { Component } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { Player } from 'src/app/shared/models/player/player';
import { PlayerService } from 'src/app/shared/services/player/player.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent {

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
