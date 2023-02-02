import { Component } from '@angular/core';
import { GameTypeService } from '../services/game-type/game-type.service';
import { GameType } from '../models/game-type/game-type';

@Component({
  selector: 'app-gametype',
  templateUrl: './gametype.component.html',
  styleUrls: ['./gametype.component.scss']
})
export class GametypeComponent {

  public gameTypeList: GameType[] = [];
  public displayedColumns: string[] = ['id', 'label', 'timer', 'delete']

  constructor(private gameTypeService: GameTypeService) {
    this.gameTypeService.getGameTypeList().subscribe(
      (gameTypeList: GameType[]) => {
        this.gameTypeList = gameTypeList;
      }
    )
  }

}
