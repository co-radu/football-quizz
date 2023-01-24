import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameType } from '../models/game-type/game-type';

@Component({
  selector: 'app-games-display',
  templateUrl: './games-display.component.html',
  styleUrls: ['./games-display.component.scss']
})
export class GamesDisplayComponent {

  private currentGameTypeId: number = +(<string>this.route.snapshot.paramMap.get('gameTypeId'));
  private gameTypeList: GameType[] = (<GameType[]>JSON.parse(localStorage['game_type_list']));

  public currentGameType: GameType = (<GameType>this.gameTypeList.find((gameType: GameType) => gameType.id === this.currentGameTypeId));

  constructor(private route: ActivatedRoute) {
    console.log(this.currentGameType.games); // Add the random selection method.
  }
}
