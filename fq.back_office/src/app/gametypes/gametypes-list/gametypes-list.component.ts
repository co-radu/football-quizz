import { Component } from '@angular/core';
import { GameType } from 'src/app/shared/models/game-type/game-type';
import { GameTypesService } from 'src/app/shared/services/game-types/game-types.service';

@Component({
  selector: 'app-gametypes-list',
  templateUrl: './gametypes-list.component.html',
  styleUrls: ['./gametypes-list.component.scss']
})
export class GametypesListComponent {

  public data: GameType[] = [];

  constructor(
    private gameTypesService: GameTypesService,
  ) {
    this.gameTypesService.getGameTypesList().subscribe((gameTypesList: GameType[]) => {
      this.data = gameTypesList;
    });
  }
}
