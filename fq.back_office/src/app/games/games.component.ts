import { Component } from '@angular/core';
import { GamesService } from '../services/games/games.service';
import { Game } from '../models/game/game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {

  public gameList: Game[] = [];
  public displayedColumns: string[] = ['id', 'gameType', 'player', 'jersey', 'composition']

  constructor(private gameService: GamesService) {
    this.gameService.getGameList().subscribe(((gameList: Game[]) => this.gameList = gameList));
  }

}
