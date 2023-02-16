import { Component } from '@angular/core';

import { GameType } from './models/game-type/game-type';
import { Game } from './models/game/game';
import { GameTypeService } from './services/game-type/game-type.service';
import { GameService } from './services/game/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(
    private gameTypeService: GameTypeService,
    private gameService: GameService
  ) {
    if (navigator.onLine) {
      this.gameTypeService.getGameTypeList().subscribe(
        (gameTypeList: GameType[]) => {
          const gameTypeListSaved: string = localStorage['game_type_list'];
          if (!gameTypeListSaved || gameTypeListSaved != JSON.stringify(gameTypeList)) {
            localStorage.setItem('game_type_list', JSON.stringify(gameTypeList));
          }
        }
      );
      this.gameService.getGameList().subscribe(
        (gameList: Game[]) => {
          const gameListSaved: string = localStorage['game_list'];
          if (!gameListSaved || gameListSaved != JSON.stringify(gameList)) {
            localStorage.setItem('game_list', JSON.stringify(gameList));
          }
        }
      );
    }
  }
}
