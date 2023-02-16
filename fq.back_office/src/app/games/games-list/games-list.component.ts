import { Component } from '@angular/core';
import { Game } from '../../shared/models/game/game';
import { GamesService } from '../../shared/services/games/games.service';
import { GamesFormComponent } from '../games-form/games-form.component';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})

export class GamesListComponent {

  public gamesToData: Game[] = [];

  constructor(
    private gameService: GamesService,
  ) {
    this.gameService.getList().subscribe((games: Game[]) => {
      this.gamesToData = games;
    });
  }

  pushGame(gamesFormComponent: GamesFormComponent): void {
    gamesFormComponent.newGameEvent.subscribe(
      (newGame: Game) => {
        this.gamesToData.push(newGame);
      }
    );
  }
}
