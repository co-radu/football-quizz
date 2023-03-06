import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../../models/game/game';

class GameToDisplay {

  constructor(
    gameType: string,
    clueList: string[],
    jersey?: string,
    player?: string,
    composition?: string,
    id?: number,
  ) {
    this.id = id;
    this.gameType = gameType;
    this.clueList = clueList;
    this.jersey = jersey;
    this.player = player;
    this.composition = composition;
  }

  gameType!: string;
  clueList!: string[];
  jersey?: string;
  player?: string;
  composition?: string;
  id?: number;
}

@Pipe({
  name: 'gamesDisplay'
})
export class GamesDisplayPipe implements PipeTransform {

  transform(games: Game[]): GameToDisplay[] {
    let gamesTodisplay: GameToDisplay[] = [];
    games.forEach((game: Game) => {
      gamesTodisplay.push(new GameToDisplay(
        game.gameType.label,
        game.clueList,
        game.jersey?.team,
        game.player?.lastName,
        game.composition?.label,
        game.id
      ));
    });
    return gamesTodisplay;
  }
}
