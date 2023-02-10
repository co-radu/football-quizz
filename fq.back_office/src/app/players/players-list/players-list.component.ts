import { Component } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { Player } from 'src/app/shared/models/player/player';
import { PlayersService } from 'src/app/shared/services/players/players.service';

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

  constructor(private playersService: PlayersService) {
    this.playersService.getPlayersList().subscribe(((playerList: Player[]) => this.playerList = playerList));
  }

}
