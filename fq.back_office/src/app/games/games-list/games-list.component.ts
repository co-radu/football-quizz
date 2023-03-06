import { Component, OnInit } from '@angular/core';
import { Game } from '../../shared/models/game/game';
import { GamesService } from '../../shared/services/games/games.service';
import { GamesFormComponent } from '../games-form/games-form.component';
import { NavigationService } from 'src/app/shared/services/navigation/navigation.service';
import { GamesDisplayPipe } from 'src/app/shared/pipes/games-display/games-display.pipe';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})

export class GamesListComponent implements OnInit {

  public gamesToDisplay: any[] = [];
  public title: string = '';
  private gamesPipe = new GamesDisplayPipe();

  constructor(
    private gameService: GamesService,
    private navigation: NavigationService
  ) {
    this.gameService.getList().subscribe((games: Game[]) => {
      this.gamesToDisplay = this.gamesPipe.transform(games);
    });
  }

  ngOnInit(): void {
    this.title = this.navigation.getCurrent();
  }

  pushGame(gamesFormComponent: GamesFormComponent): void {
    gamesFormComponent.newGameEvent.subscribe(
      (newGame: Game) => {
        this.gamesToDisplay.push(newGame);
      }
    );
  }
}
