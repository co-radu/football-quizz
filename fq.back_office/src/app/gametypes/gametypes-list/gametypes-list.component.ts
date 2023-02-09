import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GameType } from 'src/app/shared/models/game-type/game-type';
import { GameTypeService } from 'src/app/shared/services/game-type/game-type.service';

@Component({
  selector: 'app-gametypes-list',
  templateUrl: './gametypes-list.component.html',
  styleUrls: ['./gametypes-list.component.scss']
})
export class GametypesListComponent {

  public data: GameType[] = [];

  constructor(
    private gameTypeService: GameTypeService,
  ) {
    this.gameTypeService.getGameTypeList().subscribe((gameTypesList: GameType[]) => {
      this.data = gameTypesList;
    });
  }
}
