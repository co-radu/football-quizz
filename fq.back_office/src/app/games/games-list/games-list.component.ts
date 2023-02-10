import { Component } from '@angular/core';
import { Game } from '../../shared/models/game/game';
import { GamesService } from '../../shared/services/games/games.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})

export class GamesListComponent {

  public data: Game[] = [];

  constructor(
    private gameService: GamesService,
  ) {
    this.gameService.getList().subscribe((games: Game[]) => {
      this.data = games;
    });
  }
}
