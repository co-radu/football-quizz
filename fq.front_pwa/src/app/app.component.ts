import { Component } from '@angular/core';

import { Game } from './models/game/game';
import { GameService } from './services/game/game.service';
import { GameType } from './models/game-type/game-type';
import { GameTypeService } from './services/game-type/game-type.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private gameListSaved: Game[] = JSON.parse(localStorage['game_list']);
  private gameTypeListSaved: GameType[] = JSON.parse(localStorage['game_list']);

  constructor(
    private gameService: GameService,
    private gameTypeService: GameTypeService
  ) {
    if (navigator.onLine) {
      this.gameService.getGameList().subscribe(
        (gameList: Game[]) => {
          if (JSON.stringify(this.gameListSaved) != JSON.stringify(gameList))
            localStorage.setItem('game_list', JSON.stringify(gameList));
        }
      );
      this.gameTypeService.getGameTypeList().subscribe(
        (gameTypeList: GameType[]) => {
          if (JSON.stringify(this.gameTypeListSaved) != JSON.stringify(gameTypeList))
            localStorage.setItem('game_type_list', JSON.stringify(gameTypeList));
        }
      )
    }
  }
}
