import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/game/game';
import { GamesService } from '../services/games/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})

export class GamesComponent {

  public data: Game[] = [];

  constructor(
    private gameService: GamesService,
  ) {
    this.gameService.getList().subscribe((games: Game[]) => {
      this.data = games;
    });
  }
}
