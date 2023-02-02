import { Injectable } from '@angular/core';
import { GameType } from 'src/app/models/game-type/game-type';
import { Game } from 'src/app/models/game/game';

@Injectable({
  providedIn: 'root'
})
export class PartyService {

  constructor() { }

  private gameTypeList: GameType[] = <GameType[]>JSON.parse(localStorage['game_type_list']);
  private gamesList: Game[] = <Game[]>JSON.parse(localStorage['game_list']);

  gamesForParty(gameTypeId?: number): Game[] {
    const gamesForParty: Game[] = [];
    let games: Game[] = [];
    if (gameTypeId) {
      const gameWithGameType: Game = <Game>this.gamesList.find((game: Game) => game.gameType.id === gameTypeId);
      games.push(gameWithGameType);
    } else {
      games = this.gamesList;
    }
    let gameRandom: Game = games[Math.floor(Math.random() * games.length)];
    do {
      if (gamesForParty.includes(gameRandom)) {
        gameRandom = games[Math.floor(Math.random() * games.length)];
      } else {
        gamesForParty.push(gameRandom);
      }
    } while (gamesForParty.length < 1);
    return gamesForParty;
  }
}
