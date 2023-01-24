import { Component } from '@angular/core';

import { GameType } from './models/game-type/game-type';
import { GameTypeService } from './services/game-type/game-type.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private gameTypeListSaved: GameType[] = JSON.parse(localStorage['game_type_list']);

  constructor(
    private gameTypeService: GameTypeService
  ) {
    if (navigator.onLine) {
      this.gameTypeService.getGameTypeList().subscribe(
        (gameTypeList: GameType[]) => {
          if (JSON.stringify(this.gameTypeListSaved) != JSON.stringify(gameTypeList)) {
            localStorage.setItem('game_type_list', JSON.stringify(gameTypeList));
          }
        }
      )
    }
  }
}
