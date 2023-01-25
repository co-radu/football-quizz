import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameType } from '../models/game-type/game-type';
import { Game } from '../models/game/game';

@Component({
  selector: 'app-games-display',
  templateUrl: './games-display.component.html',
  styleUrls: ['./games-display.component.scss']
})
export class GamesDisplayComponent {

  private gameTypeList: GameType[] = (<GameType[]>JSON.parse(localStorage['game_type_list']));
  private currentGameTypeId: number = +(<string>this.route.snapshot.paramMap.get('gameTypeId'));
  private currentGameType: GameType = (<GameType>this.gameTypeList.find((gameType: GameType) => gameType.id === this.currentGameTypeId));
  private gamesOfCurrentGameType: Game[] = this.currentGameType.games;

  public gamesForParty: Game[] = this.randomSelectedGames();

  constructor(private route: ActivatedRoute) {
  }

  randomSelectedGames(): Game[] {
    const gamesArray: Game[] = [];
    let gameRandom: Game = this.currentGameType.games[Math.floor(Math.random() * this.currentGameType.games.length)];
    do {
      if (gamesArray.includes(gameRandom)) {
        gameRandom = this.currentGameType.games[Math.floor(Math.random() * this.currentGameType.games.length)];
      } else {
        gamesArray.push(gameRandom);
      }
    } while (gamesArray.length < 5);
    return gamesArray;
  }
}
